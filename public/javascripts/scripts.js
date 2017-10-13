$(function () {
    $.getJSON('api', updateFeed);

    function updateFeed(data) {
        var output = '';
        $.each(data, function (key, item) {
            output += '<div>';
            output += '<h4>' + item.title + '</h4>';
            output += '<p><small>' + item.message + '</small></p>';
            output += '</div>';
            output += '<hr>';
        });
        $('#recent-feeds').html(output);
    }
});