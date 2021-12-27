const crypto = require('crypto')
const fs = require('fs')

process.env.UV_THREADPOOL_SIZE = 2;

const start = Date.now()

fs.readFile("./text.txt", () => {
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "password completed")
    })
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "password completed")
    })
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "password completed")
    })
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "password completed")
    })
})
