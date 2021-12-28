const assert = require('assert').strict;
const assert1 = require('assert/strict');

const fs = require('fs')
try {
    const result = assert.deepEqual([1, 2, [3, 4]], [1, 2, ['3', 4]])
    fs.writeFile('./text.txt', result, (err, data) => {
        console.log('object')
    })
    
} catch (error) {
    console.log(__filename)
    fs.appendFile(__filename, "" + error, (err, data) => {
        console.log('object')
    })
}