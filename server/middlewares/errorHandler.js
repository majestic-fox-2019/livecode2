module.exports = function(err, req, res, next) {
  console.log(err)
  if (err.name == 'SequelizeValidationError') {
    let errors = []
    err.errors.forEach((error) => {
      errors.push(error.message)
    })
    res.status(400).json({
      errors,
      message: err.name
    })
  } else {
    res.status(500).json({
      errors: err.errors,
      message: err.name
    })
  }
}
