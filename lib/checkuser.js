module.exports = function(req, res, next){
  if(req.cookies.name === 'Herford'){
    next();
  }else{
    res.redirect('/rejected')
  }
}
