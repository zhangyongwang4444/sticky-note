var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource 7777');
});

router.get('/abc', function(req, res, next) {
  res.send('respond with a resource abcabcabc');
});

router.get('/def', function(req, res, next) {
  res.send('respond with a resource defdefdef');
}); 
module.exports = router;
