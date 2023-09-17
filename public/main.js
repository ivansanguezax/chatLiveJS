$(function(){
    console.log('main.js loaded');

    var message = $('#chat-message');

    $('#message-box').submit(function(e){
        e.preventDefault();
        console.log(message.val());
    });
});