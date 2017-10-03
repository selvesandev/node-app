var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function (req, res, next) {
    var myArtWork = [];
    appdata.speakers.forEach(function (item) {
        myArtWork = myArtWork.concat(item.artwork);
    });

    res.render('index', {title: 'Home', artwork: myArtWork});
});


module.exports = router;
