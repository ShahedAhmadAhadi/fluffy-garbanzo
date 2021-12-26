// run separately
const fs = require('fs')
const http = require('http')
const url = require('url')

const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8')
const dataObject = JSON.parse(data)

const server = http.createServer((req, res) => {
    const pathName = req.url
    console.log(req.url)
    console.log(url.parse(req.url, true))

    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end('')
    } else if (pathName === '/product') {

    } else if (pathName === '/api') {
        
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(data)
    }else {
        res.end('page not found')
    }
})

server.listen(8000, () => {
    console.log('server listening 8000')
})
