//middleware function
//order is important with middleware

module.exports = function(req, res, next){
  //full cookie jar on the server
  
  //scramble cookies signed more secure, harder to read
  //res.cookie('age', 29, {signed: true})
  res.cookie("views", (parseInt(req.cookies.views) ||0)+1);
  next();
}
