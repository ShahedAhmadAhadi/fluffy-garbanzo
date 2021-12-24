const EventEmitter = require("events")
const {createReadStream} = require('fs')

const customEmitter = new EventEmitter()
customEmitter.on('response', (name, age) => {
    console.log(`data recieved of ${name} has age of ${age} `)

})
customEmitter.on('data', () => {
    console.log(`data emitter`)

})


customEmitter.emit('response', 'mike', 10)
customEmitter.emit('data')
console.log(customEmitter.eventNames())
console.log(customEmitter.getMaxListeners())