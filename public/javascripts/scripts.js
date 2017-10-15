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
});