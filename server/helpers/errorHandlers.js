exports.client = function(err, req, res, next){
  try{
    let newError = new Error
    switch(err.name){
      case 'SequelizeDatabaseError':
        next()
        break;
      case 'SequelizeValidationError':
        newError.error = 400
        newError.message = {}
        err.errors.map(el => {
          newError.message[el.path] = el.message
        })
        throw newError
      default:
        newError.error = err.error
        newError.message = err.message
        throw newError
    }
  }
  catch(err){
    res.status(err.error || 404).json(err)
  }
}

exports.server = function(err, req, res, next){
  res.status(500).json({
    code: 500,
    message: "Error not found"
  })
}