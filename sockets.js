const socketIO = require('socket.io');

module.exports = function (server) {
    const sockets = socketIO(server);

    sockets.on('connection', function(socket) {
        console.log('Nuevo cliente conectado');

        socket.on('message-del-client', function(data) {
            sockets.emit('message-del-server', data);
        });
    });
}
