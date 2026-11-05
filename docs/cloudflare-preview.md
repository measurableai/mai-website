# Deploy the Cloudflare preview

Deploy the Gatsby output to `https://cf-preview.measurable.ai` with the
`mai-website-preview` Worker. Production hosting and DNS stay separate.
`cloudflare-preview.json` records this deployment's settings. It is not a
Wrangler configuration or a Git build integration. Builds and deployments are manual.

## Build the site

Use Node 12, as required by `package.json`. Run this from the repository root
with Docker available:

```sh
docker run --rm --platform linux/amd64 -v "$PWD:/app" -w /app node:12.22.12-bullseye sh -ec '
  yarn install --frozen-lockfile --non-interactive
  GATSBY_TELEMETRY_DISABLED=1 yarn build
'
```

The build produces `public/`. Keep the existing production canonical URLs,
Open Graph URLs, sitemap URLs, and discovery metadata. This preview tests the
same website assets, including the agent discovery files from PRs #188 through #190.

## Upload the assets

Use a Cloudflare connection with Workers Scripts write access for this account
and Workers Custom Domains access for the preview hostname. Follow the
[Workers direct upload API](https://developers.cloudflare.com/workers/static-assets/direct-upload/).

1. Generate the API manifest and a local index. Keep `public/` unchanged until the
   upload finishes. The manifest excludes `_headers` and `_redirects`, rejects
   symlinks, and hashes content with its extension so different MIME types have
   different identities.

   ```sh
   python3 scripts/cloudflare-assets.py manifest \
     --directory public \
     --output /tmp/mai-preview-manifest.json \
     --index /tmp/mai-preview-index.json
   ```

2. Through the Cloudflare connector, send
   `POST /accounts/{account_id}/workers/scripts/mai-website-preview/assets-upload-session`
   with `{"manifest": <contents of /tmp/mai-preview-manifest.json>}`.
   Save the response in `/tmp/mai-preview-session.json` with file mode `0600`.
   The upload token lasts one hour. Do not print tokens in logs or commit them.

3. Upload only the buckets returned by Cloudflare. The script uses the session's
   upload token, sends base64 multipart file parts with their MIME types, and
   retries transient HTTP or network failures up to five attempts per bucket.
   An empty bucket list reuses the session token as the completion token.

   ```sh
   python3 scripts/cloudflare-assets.py upload \
     --account-id ACCOUNT_ID \
     --index /tmp/mai-preview-index.json \
     --session /tmp/mai-preview-session.json \
     --output /tmp/mai-preview-completion.json
   ```

4. Through the connector, deploy with
   `PUT /accounts/{account_id}/workers/scripts/mai-website-preview` using multipart
   form data. Read the completion JWT from the output file. Set `assets.jwt` to
   that value and copy `assets.config` and `compatibility_date` from
   `cloudflare-preview.json` into the metadata part, together with its
   `observability` settings. Add `assets.config._headers`
   as a string containing `public/_headers`, followed by this preview-only block:

   ```text
   /*
     X-Robots-Tag: noindex
   ```

   `_headers` is deployment metadata, not an uploaded public asset. Preserve the
   file's existing Link, Markdown MIME, JSON MIME, and CORS rules. The extra rule
   belongs only to this deployment. Do not edit `static/_headers` for the preview.

   For a Worker module, include `main_module: "main.js"` and the binding
   `{"type":"assets","name":"ASSETS"}`. Attach `main.js` with MIME
   `application/javascript+module` and this fallback handler:

   ```js
   export default {
     fetch(request, env) {
       return env.ASSETS.fetch(request)
     },
   }
   ```

   Assets handle matching requests before this fallback. Keep
   `html_handling: "auto-trailing-slash"` and `not_found_handling: "404-page"`
   so unknown URLs return Gatsby's 404 page and status.

5. Attach the Custom Domain `cf-preview.measurable.ai` to this Worker using the
   Cloudflare connector. Target only this hostname. Verify the resulting domain
   points to `mai-website-preview`.

## Verify the live deployment

Check the homepage, an English route, `/index.md`, `/llms.txt`,
`/.well-known/ai-catalog.json`, `/.well-known/agent-skills/index.json`, and the
skill URL declared in that index. Compare the downloaded skill's SHA-256 with
the index digest and the local file. Check a built JavaScript file and an SVG
for their MIME types. Every response must contain `X-Robots-Tag: noindex`.
Check the Link header on HTML and discovery responses. An unknown path must
return status 404. Check that production still responds through its original
hosting independently of this preview.

Delete the local session and completion files after deployment. For another
deployment, rebuild, regenerate the manifest, and start a new upload session.
