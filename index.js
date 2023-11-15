const express = require('express');
const http = require('http');
//we want to attack socket with express thus we do not use direct app.listen thus we use http module
const path = require("path");
const app = express();
const { Server } = require('socket.io')//import socket.io

const server = http.createServer(app)

const io = new Server(server)//handle socket.io





//socket.io
io.on("connection",(socket)=>{
socket.on('user-message',(message)=>{
    console.log("A new user message",message)
io.emit("message",message)//if any msg received from user then send it to all users
})
})





app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
    return res.sendFile(
        '/public/index.html'
    )
})
server.listen('8080', () => {
    console.log("listing on port 8080");
})