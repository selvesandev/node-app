var express = require('express');
var router = express.Router();
var feedbackData = require('../feedback.json');

/* GET home page. */
router.get('/api', function (req, res, next) {
    res.json(feedbackData);
});


module.exports = router;
