var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('mydata', { title: 'Nikhil Krishnan Venkatesh'});
});

module.exports = router;
