const path = require('path')

const file = './path/index.js'

console.log(path.dirname(file))
console.log(path.basename(file))
console.log(path.extname(file))

console.log(path.basename(file, path.extname(file)))

console.log(path.resolve(file))

console.log(path.resolve('tmp', 'test.txt'))
// absolute path 
console.log(path.resolve('/tmp', 'test-f', 'test.txt'))

console.log(path.normalize('/path/../filesystem/../path/index.js'))

