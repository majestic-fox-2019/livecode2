let formatError = {
  "errors": [],
  "message": ''
}

module.exports = (err, req, res, next) => {
  if (err.name == 'SequelizeValidationError'){
    console.log('masuk')
    err.errors.forEach(err => {
      formatError.errors.push(err.message)
    })
    formatError.message = 'Validation Error'
    res.status(400).json(formatError)
    formatError.errors = []
  } else if (err.message){
    res.status(404).json(err.message)
  } else {
    res.status(500).json({message: 'Internal Server Error'})
  }
  
}