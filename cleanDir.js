const fs = require('fs-extra')
const path = require('path')

const cacheDir = path.resolve(`./.cache`)
const distDir = path.resolve(`./dist`)

fs.removeSync(distDir)
fs.removeSync(cacheDir)
