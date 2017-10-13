var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/feedback', function (req, res, next) {
    res.render('feedback', {title: 'Feedback', page: 'feedback'});
});


module.exports = router;
