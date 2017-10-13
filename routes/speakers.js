var express = require('express');
var router = express.Router();


router.get('/speakers', function (req, res, next) {
    var myArtWork = [];
    var myArtists = [];
    var appdata = req.app.get('appdata');
    myArtists = appdata.speakers;


    appdata.speakers.forEach(function (item) {
        myArtWork = myArtWork.concat(item.artwork);
    });

    res.render('speakers', {title: 'Speakers', artwork: myArtWork, 'artists': myArtists, page: 'artistList'});
});


router.get('/speakers/:speakerId', function (req, res, next) {
    var myArtWork = [];
    var myArtists = [];
    var appdata = req.app.get('appdata');

    appdata.speakers.forEach(function (item) {
        if (item.shortname == req.params.speakerId) {
            myArtWork = myArtWork.concat(item.artwork);
            myArtists.push(item);
        }
    });

    res.render('speakers', {title: 'Speakers', artwork: myArtWork, artists: myArtists, page: 'artistDetail'});
});

module.exports = router;