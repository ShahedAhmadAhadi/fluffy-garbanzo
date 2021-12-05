const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Home Page')
        res.end()
    }
    if (req.url === '/about') {
        res.write('about page')
    }else {
        res.end('<h1>no page like this!</h1>')
    }
})

server.listen(8000)