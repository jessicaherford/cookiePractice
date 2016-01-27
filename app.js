var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var incrementUser = require('./lib/incrementUser')
var checkUser = require('./lib/checkUser')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


//middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(cookieParser("dlkakdslifjladfsldfj"));
//put in random string in cookie Parser, makes cookie unreconizeable
app.use(express.static(path.join(__dirname, 'public')));

//res.cookie('views', (parseInt(req.cookies.views)|| 0)+100);

//between request and response, intercepts traffic, middleware
//middleware -  bouncer at the club, he says lets see some id(credentials)

//app.use('/', function(req, res, next){
//res.cookie('views', (parseInt(req.cookies.views)|| 0)+1);
//next();
//})


app.use('/', incrementUser)
app.use('/', routes);
//has to go through 
app.use('/users', users);
app.use('/users', checkUser);



//SET COOKIE: res.cookie('name', 'value')
//SET COOKIE: res.cookie('user_id', '5')


//READ COOKIE: req.cookie.name
//READ COOKIE: req.cookie.user_id

//DELETE A COOKIE: res.clearCookie('name')
//DELETE A COOKIE: res.clearCookie('user_id')

//request sends cookie jar and response

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
