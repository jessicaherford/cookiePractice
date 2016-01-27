var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // cookie view needs to be 0 if rist time, OR cookies plus one
  //setter setting name to fred
  // res.cookie("name", "fred")
  // res.clearCookie('name');
  res.cookie("name", "Herford");
  res.cookie("views", (parseInt(req.cookies.views) || 0)+1);
  res.render('index', { title: 'Express', views: req.cookies.views });

});

router.get('/reset', function(req, res, next) {
  res.clearCookie("views");
  res.render('index', { title: 'Express', views: req.cookies.views });

});

//
// router.get('/reset', function(req, res, next) {
//   res.clearCookie("views");
//   res.redirect("/"));
//
// });


module.exports = router;
