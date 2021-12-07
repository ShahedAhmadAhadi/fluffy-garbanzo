const EventEmitter = require("events")
const {createReadStream} = require('fs')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
    console.log(`data recieved of ${name} has age of ${age} `)

})

customEmitter.emit('response', 'mike', 10)