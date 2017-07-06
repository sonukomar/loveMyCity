var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Love My City : Delhi'});
  
  
});

router.get('/delhi', function(req, res, next) {
   res.render('index', { title: 'Love My City : Delhi'});
  
  
});

router.get('/bangalore', function(req, res, next) {
   res.render('bangalore', { title: 'Love My City : Bangalore'});
  
  
});

router.get('/mumbai', function(req, res, next) {
   res.render('mumbai', { title: 'Love My City : Mumbai'});
  
  
});

router.get('/jaipur', function(req, res, next) {
   res.render('jaipur', { title: 'Love My City : Jaipur'});
  
  
});

router.get('/lucknow', function(req, res, next) {
   res.render('lucknow', { title: 'Love My City : Lucknow'});
  
  
});

router.get('/hyderabad', function(req, res, next) {
   res.render('hyderabad', { title: 'Love My City : Hyderabad'});
  
  
});
module.exports = router;
