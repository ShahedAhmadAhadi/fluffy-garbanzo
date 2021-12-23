const path = require('path')

const file = './path/index.js'

console.log(path.dirname(file))
console.log(path.basename(file))
console.log(path.extname(file))

console.log(path.basename(file, path.extname(file)))

console.log(path.resolve(file))

