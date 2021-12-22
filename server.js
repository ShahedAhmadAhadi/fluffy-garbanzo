const http = require('http')

const port = process.env.PORT || 8000

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({data: {names: ['Ali', 'Ahmad']}}))
    }
    if (req.method === "POST") {
        res.statusCode = 200
        req.on('data', function (data) {
            console.log(data.toString('utf8'))
        })
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({result: 'success'}))
    }
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})