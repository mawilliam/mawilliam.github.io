const path = require("path")
const fs = require("fs")
const dest = "docs"

exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    fs.rmdirSync(path.join(__dirname, dest), { recursive: true })
    fs.rmdirSync(path.join(__dirname, "public_dev"), { recursive: true })
    if (fs.existsSync(path.join(__dirname, "public"))) {
      fs.renameSync(
        path.join(__dirname, "public"),
        path.join(__dirname, "public_dev")
      )
    }
  }
}

exports.onPostBuild = () => {
  
  fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, dest))
  if (fs.existsSync(path.join(__dirname, "public_dev"))) {
    fs.renameSync(
      path.join(__dirname, "public_dev"),
      path.join(__dirname, "public")
    )
  }
}