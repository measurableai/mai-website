#!/usr/bin/env python3
"""Prepare and upload Cloudflare Workers static assets without dependencies."""

import argparse
import base64
import hashlib
import json
import mimetypes
import os
from pathlib import Path
import sys
import time
import urllib.error
import urllib.request
import uuid


MIME_TYPES = {
    ".js": "application/javascript",
    ".json": "application/json",
    ".md": "text/markdown; charset=utf-8",
    ".svg": "image/svg+xml",
    ".html": "text/html; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".css": "text/css; charset=utf-8",
}


def asset_hash(content, path):
    return hashlib.md5(content + b"\0" + path.suffix.lower().encode()).hexdigest()


def write_json(path, value):
    with open(path, "w", opener=lambda name, flags: os.open(name, flags, 0o600)) as output:
        os.fchmod(output.fileno(), 0o600)
        json.dump(value, output, indent=2, sort_keys=True)
        output.write("\n")


def manifest(args):
    directory = Path(args.directory)
    if directory.is_symlink() or not directory.is_dir():
        raise ValueError("Asset directory must be a real directory")
    directory = directory.resolve()
    files, assets = {}, {}
    for path in sorted(directory.rglob("*")):
        if path.is_symlink():
            raise ValueError("Symlink in asset directory: " + str(path))
        if not path.is_file() or path.name in {"_headers", "_redirects"}:
            continue
        content = path.read_bytes()
        digest = asset_hash(content, path)
        files["/" + path.relative_to(directory).as_posix()] = {
            "hash": digest, "size": len(content)
        }
        assets[digest] = {
            "path": str(path),
            "size": len(content),
            "content_type": MIME_TYPES.get(path.suffix.lower())
            or mimetypes.guess_type(str(path))[0] or "application/octet-stream",
        }
    write_json(args.output, files)
    write_json(args.index, assets)
    print("Prepared {} paths ({} unique assets)".format(len(files), len(assets)))


def upload_bucket(account_id, token, body, boundary):
    url = "https://api.cloudflare.com/client/v4/accounts/{}/workers/assets/upload?base64=true".format(account_id)
    request = urllib.request.Request(url, data=body, headers={
        "Authorization": "Bearer " + token,
        "Content-Type": "multipart/form-data; boundary=" + boundary,
    })
    for attempt in range(5):
        try:
            with urllib.request.urlopen(request, timeout=120) as response:
                result = json.load(response)
            if not result.get("success", True):
                raise ValueError("Cloudflare rejected an asset bucket")
            return result.get("result", result)
        except urllib.error.HTTPError as error:
            if error.code not in {408, 429, 500, 502, 503, 504} or attempt == 4:
                raise ValueError("Asset upload failed with HTTP {}".format(error.code)) from None
        except (urllib.error.URLError, TimeoutError):
            if attempt == 4:
                raise ValueError("Asset upload failed after five network attempts") from None
        time.sleep(2 ** attempt)


def upload(args):
    session = json.loads(Path(args.session).read_text())
    session = session.get("result", session)
    assets = json.loads(Path(args.index).read_text())
    token, buckets = session["jwt"], session["buckets"]
    completion = token if not buckets else None
    for number, bucket in enumerate(buckets, 1):
        boundary = "cloudflare-assets-" + uuid.uuid4().hex
        parts = []
        for digest in bucket:
            asset = assets[digest]
            path = Path(asset["path"])
            if path.is_symlink():
                raise ValueError("Asset became a symlink: " + str(path))
            content = path.read_bytes()
            if len(content) != asset["size"] or asset_hash(content, path) != digest:
                raise ValueError("Asset changed after manifest generation: " + str(path))
            parts.append((
                '--{}\r\nContent-Disposition: form-data; name="{}"; filename="{}"\r\n'
                'Content-Type: {}\r\n\r\n'.format(boundary, digest, digest, asset["content_type"])
            ).encode() + base64.b64encode(content) + b"\r\n")
        body = b"".join(parts) + ("--" + boundary + "--\r\n").encode()
        result = upload_bucket(args.account_id, token, body, boundary)
        completion = result.get("jwt") or completion
        print("Uploaded bucket {}/{} ({} assets)".format(number, len(buckets), len(bucket)))
    if not completion:
        raise ValueError("Cloudflare returned no completion token")
    write_json(args.output, {"jwt": completion})
    print("Saved completion token to " + args.output)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest="command", required=True)
    prepare = commands.add_parser("manifest")
    prepare.add_argument("--directory", default="public")
    prepare.add_argument("--output", required=True)
    prepare.add_argument("--index", required=True)
    prepare.set_defaults(run=manifest)
    send = commands.add_parser("upload")
    send.add_argument("--account-id", required=True)
    send.add_argument("--session", required=True)
    send.add_argument("--index", required=True)
    send.add_argument("--output", required=True)
    send.set_defaults(run=upload)
    args = parser.parse_args()
    try:
        args.run(args)
    except (ValueError, OSError, KeyError) as error:
        parser.exit(1, "Error: {}\n".format(error))


if __name__ == "__main__":
    main()
