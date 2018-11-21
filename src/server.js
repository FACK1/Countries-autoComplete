const path = require('path');
const fs = require('fs');
const http = require('http')
const router = require('./router')

const PORT = 3003 
const server = http.createServer(router)

server.listen(PORT)
// templete literal
console.log(`server up and running on port ${PORT}!`)
