const fs = require('fs')

const server = require('http').createServer()
    

server.on('request', (req, res) => {
    // fs.readFile('./dat.txt', (err, data) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     res.end(data)
    // })



    // const readable = fs.createReadStream('./dat.txt')
    // readable.on('data', chunk=> {
    //     res.write(chunk)
    // })

    // readable.on('end', () => {
    //     res.end('');
    // })

    // readable.on('error', (err) => {
    //     console.log(err)
    //     res.statusCode(500);
    //     res.end('file not found!')
    // })




    const readable = fs.createReadStream('./dat.txt')
    readable.pipe(res)

})

server.listen(8000, () => {
    console.log('listening')
})
