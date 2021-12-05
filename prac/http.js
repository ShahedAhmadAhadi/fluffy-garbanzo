const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Welcome to my first node server app')
    res.end()
})

server.listen(8000)