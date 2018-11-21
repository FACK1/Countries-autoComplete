const http = require('http')
const router = require('./router')

const PORT = process.env.PORT || 3002
const server = http.createServer(router)

server.listen(PORT)
// templete literal
console.log(`server up and running on port ${PORT}!`)
