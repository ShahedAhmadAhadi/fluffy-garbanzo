const fs = require('fs')
const path = require('path')

const file = './filesystem/text.txt'


try {
    const file = fs.openSync('./filesystem/text.txt', 'r')
    console.log(file)
} catch (error) {
    console.log(error)
}

// fs.stat('./filesystem/text.txt', (err, stats) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(stats)
//     //we have access to the file stats in `stats`
//   })

fs.readFile('./filesystem/text.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})

fs.writeFile('./filesystem/text.txt', `Writing to ${path.resolve(file)}`, err => {
    if (err) {
        console.log(err)
        return
    }
})

fs.writeFile('./filesystem/test.txt', `Writing to ${path.resolve(file)}`, {flag: 'a+'}, err => {
    if (err) {
        console.log(err)
        return
    }
})

const folderName = './filesystem/test'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
    console.log('created')
  }
} catch (err) {
  console.error(err)
}

console.log(fs.readdirSync('./filesystem', err => {
    console.log(err)
}))

fs.rm('./filesystem/test/', {recursive: true, force: true}, err => {
    if(err) {
        console.log(err)
    }
    console.log('deleted')
})
