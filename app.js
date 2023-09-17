const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server);
app.set('port', 4000);


app.use(express.static(__dirname +'/public'));

server.listen(app.get('port'), () => {
    console.log('Server is running');
});

var sockets = io.listen(server);

sockets.on('connection', function(socket) {
    console.log('nuevo cliente conectados');

    socket.on('message-del-client', function(data) {
        sockets.emit('message-del-server', data);
    } );
});