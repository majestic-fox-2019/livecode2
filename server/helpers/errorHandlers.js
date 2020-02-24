exports.client = function(err, req, res, next){
  try{
    let newError = new Error
    switch(err.name){
      case 'SequelizeDatabaseError':
        next(err)
        break;
      case 'SequelizeConnectionError':
        next(err)
        break;
      case 'SequelizeValidationError':
        newError.error = 400
        newError.messages = {}
        err.errors.map(el => {
          newError.messages[el.path] = el.message
        })
        throw newError
      default:
        newError.error = err.error
        newError.messages = {
          message: err.message
        }
        throw newError
    }
  }
  catch(err){
    res.status(err.error || 404).json(err.message || err)
  }
}

exports.server = function(err, req, res, next){
  res.status(500).json({
    code: 500,
    message: "Error not found"
  })
}