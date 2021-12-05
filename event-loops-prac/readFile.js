const { readFile } = require('fs')

console.log('start')
readFile('./text.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('task completed')
})
console.log('starting next task')