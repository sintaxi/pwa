
var microplatform = require("microplatform")
var pkg = require("../package.json")

module.exports = microplatform({
  cmd: "pwa",
  name: "pwa platform",
  platform: "pwa.sh",
  boilerplates: __dirname + "/boilerplates"
})