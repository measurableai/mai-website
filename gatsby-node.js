/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const fs = require("fs")

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
      content += "\nContent-Signal: ai-train=no, search=yes, ai-input=no\n"
      fs.writeFileSync(robotsPath, content)
      reporter.info("Added Content-Signal directives to robots.txt")
    }
  } catch (e) {
    reporter.warn(`Could not modify robots.txt: ${e.message}`)
  }
}
