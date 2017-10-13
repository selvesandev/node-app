var express = require('express');
var router = express.Router();
//var appdata = require('../data.json');

/* GET home page. */
router.get('/', function (req, res, next) {
    var appdata = req.app.get('appdata');
    var myArtWork = [];
    var myArtists = [];
    myArtists = appdata.speakers;
    appdata.speakers.forEach(function (item) {
        myArtWork = myArtWork.concat(item.artwork);
    });

    res.render('index', {title: 'Home', artwork: myArtWork, 'artists': myArtists, page: 'Home'});
});


module.exports = router;
