const fs = require('fs')

try {
    const file = fs.openSync('./filesystem/text.txt', 'r')
    console.log(file)
} catch (error) {
    console.log(error)
}

fs.stat('./filesystem/text.txt', (err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(stats)
    //we have access to the file stats in `stats`
  })
