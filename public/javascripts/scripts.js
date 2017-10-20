$(function () {
    $.getJSON('api', updateFeed);
    $('.feedback-form').submit(function (e) {
        e.preventDefault();
        $.post('api', {
            name: $('#name').val(),
            title: $('#title').val(),
            message: $('#message').val()
        }, updateFeed);
    });


    function updateFeed(data) {
        var output = '';
        $.each(data, function (key, item) {
            output += '<div>';
            output += '<h4>' + item.title + '</h4>';
            output += '<small><u>' + item.name + '</u></small>';
            output += '<p><small>' + item.message + '</small></p>';
            output += '</div>';
            output += '<hr>';
        });
        $('#recent-feeds').html(output);
    }


    //Chat Form
    let uname = document.querySelector('#name');
    let message = document.querySelector('#message');

    let socket = io();
    socket.on('connect', function () {
        let chatForm = document.forms.chatForm;
        //this code will only run where there is chat form
        if (chatForm) {

            chatForm.addEventListener('submit', function (e) {
                e.preventDefault();
                // showMessage({
                //     uname: uname.value,
                //     message: message.value
                // });
                //When somebody submits the form we are going to
                //emit this event to the server
                socket.emit('postMessage', {
                    uname: uname.value,
                    message: message.value
                });
                message.value = '';
                message.focus();
            });

            //the updateMessage will be emitted back by the server catching that here.
            socket.on('updateMessages', function (data) {
                showMessage(data);
            });
        }

    });


    function showMessage(data) {
        let chatDisplay = document.querySelector('.chat-box');
        let newMessage = document.createElement('p');

        if (uname.value === data.uname) {
            newMessage.className = 'bg-success chat-text';
        } else {
            newMessage.className = 'bg-default chat-text';
        }

        newMessage.innerHTML = `<strong>${data.uname}</strong>: ${data.message}`;
        chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
    }
});