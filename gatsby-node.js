/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const fs = require("fs")
const crypto = require("crypto")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    externals: {
      canvas: "commonjs canvas",
    },
  })
}

exports.onPostBuild = ({ reporter }) => {
  const robotsPath = path.join(__dirname, "public", "robots.txt")
  try {
    let content = fs.readFileSync(robotsPath, "utf8")
    if (!content.includes("Content-Signal")) {
      content = content.replace(
        /^Allow: .*$/m,
        "$&\nContent-Signal: ai-train=no, search=yes, ai-input=no"
      )
      fs.writeFileSync(robotsPath, content)
      reporter.info("Added Content-Signal directives to robots.txt")
    }
  } catch (e) {
    reporter.warn(`Could not modify robots.txt: ${e.message}`)
  }

  // Digests are computed here so they always match the published skill files
  const skillsIndexPath = path.join(
    __dirname,
    "public",
    ".well-known",
    "agent-skills",
    "index.json"
  )
  const skillsIndex = JSON.parse(fs.readFileSync(skillsIndexPath, "utf8"))
  skillsIndex.skills.forEach(skill => {
    const skillFile = fs.readFileSync(
      path.join(__dirname, "public", new URL(skill.url).pathname)
    )
    const hash = crypto
      .createHash("sha256")
      .update(skillFile)
      .digest("hex")
    skill.digest = `sha256:${hash}`
  })
  fs.writeFileSync(skillsIndexPath, JSON.stringify(skillsIndex, null, 2))
}
