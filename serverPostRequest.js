const http = require('http')

const options = {
  hostname: 'localhost',
  port: 8000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(JSON.stringify({name: 'Shahed'}))
req.end()
