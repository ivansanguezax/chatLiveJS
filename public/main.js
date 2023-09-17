$(function(){

    // socket iniciado

    var socket = io();
    // variables
    var message = $('#chat-message');
    var chat = $('#chat');

    message.focus();

    $('#message-box').submit(function(e){
        e.preventDefault();
        socket.emit('message-del-client', message.val());
        message.val(''); 
    });
    socket.on('message-del-server', function(data){
        chat.append(data + '<br/> <br/>');
    });
});