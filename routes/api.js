var express = require('express');
var router = express.Router();
var Note = require('../models/note')

/* GET users listing. */
router.get('/notes', function (req, res, next) {
  console.log('/notes.....')
  Note.findAll({ raw: true }).then(notes => {
    console.log(notes)
    res.send({ status: 0, data: notes })
  })
});

router.post('/notes/add', function (req, res, next) {
  var note = req.body.note;
  console.log('add.....', note)
});

router.post('/notes/edit', function (req, res, next) {
  res.send('respond with a resource defdefdef');
});

router.post('/notes/delete', function (req, res, next) {
  res.send('respond with a resource defdefdef');
});


module.exports = router;
