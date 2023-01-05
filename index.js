const jsonServer =  require("json-server")
const server = jsonServer.create()

const router = jsonServer.router("db.json")

const middleware = jsonServer.defaults()

server.use(middleware)

server.use("",router)

server.listen(process.env.PORT || 8282,() => {
    console.log("listen in 8282")
})