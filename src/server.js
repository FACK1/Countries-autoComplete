const http = require('http')
const router = require('./router')

const PORT = process.env.PORT || 3005
const server = http.createServer(router)

server.listen(PORT,()=>{
console.log(`server up and running on port ${PORT}!`)
})
