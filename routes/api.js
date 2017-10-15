var express = require('express');
var router = express.Router();
var feedbackData = require('../feedback.json');
var bodyParser = require('body-parser');

var fs = require('fs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

/* GET home page. */
router.get('/api', function (req, res, next) {
    res.json(feedbackData);
});


router.post('/api', function (req, res, next) {
    //to put the recently added feed on the top with unshift function
    feedbackData.unshift(req.body);
    fs.exists('../feedback.json', function (exists) {
        if (exists) {
            fs.writeFile('../feedback.json', JSON.stringify(feedbackData), 'utf8', function (err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
    res.json(feedbackData);
});


module.exports = router;
