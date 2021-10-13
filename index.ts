import express = require("express")
import http = require('http')
import io, { Socket } from 'socket.io-client'
// const io = require('socket.io')

const app = express()
const server = http.createServer(app)
const socket: Socket = io(server)

server.listen(3000)

app.get("/", function(request: any, response: any) {
  response.sendFile(__dirname + "/index.html")
})