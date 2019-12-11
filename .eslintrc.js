const fs = require("fs")
const { buildClientSchema } = require("graphql")
const config = require("gatsby/dist/utils/eslint-config")

let json = null
if (fs.existsSync("./schema.json")) {
  try {
    json = require("./schema.json")
  } catch (error) {
    console.log(`Failed:`, error.message)
  }
}

let schema = ""
if (json) {
  schema = buildClientSchema(json)
}

module.exports = config(schema).baseConfig
