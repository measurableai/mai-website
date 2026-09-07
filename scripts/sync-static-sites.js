const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const ROOT = path.resolve(__dirname, "..")
const SUBMODULE_PATH = path.join(ROOT, "vendor/mai-report-generator")
const SITE_PATH = path.join(SUBMODULE_PATH, "site")
const STATIC_PATH = path.join(ROOT, "static")

function run(command) {
  console.log(`> ${command}`)
  execSync(command, { cwd: ROOT, stdio: "inherit" })
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

function removeDir(dir) {
  if (!fs.existsSync(dir)) {
    return
  }

  for (const entry of fs.readdirSync(dir)) {
    const entryPath = path.join(dir, entry)

    if (fs.lstatSync(entryPath).isDirectory()) {
      removeDir(entryPath)
    } else {
      fs.unlinkSync(entryPath)
    }
  }

  fs.rmdirSync(dir)
}

function getSiteSubdirectories() {
  if (!fs.existsSync(SITE_PATH)) {
    throw new Error(`Site directory not found: ${SITE_PATH}`)
  }

  return fs
    .readdirSync(SITE_PATH, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
}

run("git submodule update --init --recursive")
run("git submodule update --remote --merge vendor/mai-report-generator")

const siteSubdirectories = getSiteSubdirectories()

if (siteSubdirectories.length === 0) {
  console.log("No subdirectories found under vendor/mai-report-generator/site")
  process.exit(0)
}

fs.mkdirSync(STATIC_PATH, { recursive: true })

for (const directoryName of siteSubdirectories) {
  const sourceDir = path.join(SITE_PATH, directoryName)
  const targetDir = path.join(STATIC_PATH, directoryName)

  console.log(`Copying ${directoryName} -> static/${directoryName}`)
  removeDir(targetDir)
  copyDir(sourceDir, targetDir)
}

console.log(
  `Synced ${siteSubdirectories.length} director${
    siteSubdirectories.length === 1 ? "y" : "ies"
  }: ${siteSubdirectories.join(", ")}`
)
