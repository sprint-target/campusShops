var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/signInUp', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/pages/signInUp.html')); 
});
router.get('/userInformation', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/pages/userInformation.html')); 
});

module.exports = router;
