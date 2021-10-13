"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var socket_io_client_1 = require("socket.io-client");
// const io = require('socket.io')
var app = express();
var server = http.createServer(app);
var socket = (0, socket_io_client_1["default"])(server);
server.listen(3000);
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});
