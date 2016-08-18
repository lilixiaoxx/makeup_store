var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Question = require('../models/question');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {});
});



// when you want to get data from database you show render to the view page
router.get('/products', function(req, res, next) {
  Product.find({}, function(err, products){
    if (err) console.log(err);
    res.render('index', {products: products});
  })
});

router.get('/products/lip', function(req, res, next){
  Product.find({category: 'lip'}, function(err, products){
    if (err) console.log(err);
    res.render('lip', {products: products});
  })
});

router.get('/products/face', function(req, res, next){
  Product.find({category: 'face'}, function(err, products){
    if (err) console.log(err);
    res.render('face', {products: products});
  })
});

router.get('/products/mask', function(req, res, next){
  Product.find({category: 'facial-mask'}, function(err, products){
    if (err) console.log(err);
    res.render('mask', {products: products});
  })
});

router.post('/', function(req,res,next){
  var question = new Question({
    name: req.body.name,
    email:req.body.email,
    question:req.body.question
  });
  question.save(function(err, question){
    if (err) {
      res.render('home', { err: err });
    }
    else {
      // res.redirect('/');
      res.render('home', { message: "Your question was submitted!" });
    }
  })
})


module.exports = router;
