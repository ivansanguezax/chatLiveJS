const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const morgan = require('morgan');

//configuraciones del servidor
app.set('port', 1000);
app.use(morgan('dev'));

app.use(express.static(__dirname +'/public'));


//iniciando el servidor
server.listen(app.get('port'), () => {
    console.log('Server is running');
});

//esta es la lógica de los sockets

require('./sockets')(server);