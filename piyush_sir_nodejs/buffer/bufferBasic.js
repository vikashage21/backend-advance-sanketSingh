const { Buffer } = require('buffer')

const buf = Buffer.from('hello world')
console.log(buf)

// buffer to string

console.log(buf.toString())