var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function (req, res, next) {
    var myArtWork = [];
    var myArtists = [];
    myArtists = appdata.speakers;
    appdata.speakers.forEach(function (item) {
        myArtWork = myArtWork.concat(item.artwork);
    });

    res.render('index', {title: 'Home', artwork: myArtWork, 'artists': myArtists});
});


router.get('/speakers', function (req, res, next) {
    var myArtWork = [];
    var myArtists = [];
    myArtists = appdata.speakers;

    appdata.speakers.forEach(function (item) {
        myArtWork = myArtWork.concat(item.artwork);
    });

    res.render('speakers', {title: 'Speakers', artwork: myArtWork, 'artists': myArtists});
});


router.get('/speakers/:speakerId', function (req, res, next) {
    var myArtWork = [];
    var myArtists = [];

    appdata.speakers.forEach(function (item) {
        if (item.shortname == req.params.speakerId) {
            myArtWork = myArtWork.concat(item.artwork);
            myArtists.push(item);
        }
    });

    res.render('speakers', {title: 'Speakers', artwork: myArtWork, artists: myArtists});
});


module.exports = router;
