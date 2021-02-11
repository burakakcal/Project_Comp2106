var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ProjectTracker' });
});


/* GET /about */
router.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About this Site',
    pageText: 'Here is some info about this project'
  })
})

module.exports = router;
