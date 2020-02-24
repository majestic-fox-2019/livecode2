function errHandler(err, req, res, next) {
  if(err.code){
    res.status(err.code).json({err, msg:err.message})
  } else if(err.errors){
    let allErr = []
    err.errors.forEach(el => {
      allErr.push(el.message)
    });
    res.status(400).json(allErr)
  } else {
    res.status(500).json('internal server error')
  }
}

module.exports = errHandler