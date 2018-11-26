var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.query)
  var data
  if (req.session.user) {
    data = {
      isLogin: true,
      user: {
        avatar: req.session.user.avatar,
        username: req.session.user.username
      }
    }
  } else {
    data = {
      isLogin: false
    }
  }


  res.render('index', data);
});

module.exports = router;
