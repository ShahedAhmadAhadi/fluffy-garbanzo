const http = require('http')

console.log(http.METHODS)
console.log(http.STATUS_CODES)


// buffer module

const buf = Buffer.from('Hey!')

console.log(buf)
console.log(buf[0])
console.log(buf[1])
console.log(buf[2])
buf[3] = 43
console.log(buf.length)
console.log(buf.toString())

const buf1 = Buffer.from([1, 2, 100, 'A'])
console.log(buf1)

const buf2 = Buffer.alloc(4)
console.log(buf2)
buf2.write('Wh')
console.log(buf2)

console.log(__dirname)
