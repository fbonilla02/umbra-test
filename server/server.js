const jsonServer = require('json-server')
const server = jsonServer.create()
const route = jsonServer.router('data.json')
const middelwares = jsonServer.defaults()

server.use(middelwares)
server.use(route)

const port = process.env.PORT || 4000
server.listen(port, ()=>{
    console.log("Estoy en linea");
})