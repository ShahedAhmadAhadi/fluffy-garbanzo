const fs = require('fs')
const a = 'export string'

for (let i = 0; i < 120000; i++) {
    fs.appendFile('./dat.txt', `sldfjioejsljf \n`, (err, data)=> {
    })
}

module.exports = a

