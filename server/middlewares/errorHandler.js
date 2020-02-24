module.exports = (err, req, res, next) => {
  console.log(err)
  const errCode = null
  const errors = []
  if (err.msg) {
    errCode = err.code
    errors.push(err.msg)
  } else if (err.name == 'SequelizeValidationError') {
    errCode = 403
    err.errors.forEach(error => {
      errors.push(error)
    })
  } else {
    errCode = 500
    errors.push('Internal Server Error')
  }
  res.status(errCode).json({
    errors,
    message: 'Error found'
  })
}
