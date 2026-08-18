const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('greet', (userName) => {
    console.log(`hello ${userName} and welcome to events in nodejs`)

})


// Emit the Event

eventEmitter.emit('greet' , "vikash")




const myListner = () => console.log('hey i am test listener')


eventEmitter.on("test" , myListner)

eventEmitter.emit("test")