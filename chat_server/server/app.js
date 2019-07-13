
var express = require('express');
var app = express();
var socket = require('socket.io');


server = app.listen(8080, function(){
    console.log('server is running on port 8080')
});

io = socket(server);

io.on('connection', (socket) => {
    // console.log(socket)
    socket.on('SEND_MESSAGE', function(data){
        console.log(data,".")
        console.log(socket.id)
        io.emit('RECEIVE_MESSAGE', data);
    })
    socket.on('TRIGGER_TAB', function(data){
        console.log(data,".")
        console.log(socket.id)
        io.emit('TRIGGER', data);
    })
    socket.on("SEND_OFFER", function(data) {
        console.log(data,".")
        console.log(socket.id)
        io.emit("RECEIVE_OFFER",data)
    })
});

