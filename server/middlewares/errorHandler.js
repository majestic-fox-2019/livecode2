const Formatter = require('../helpers/formatter')

module.exports = (err, req, res, next) => {
  switch (err.name) {
    case 'SequelizeValidationError':
      res.status(400).json({
        errors : err.errors,
        message : Formatter.validationErrorFormat(err.errors)
      })
      break;

    case 'Nodata':
      res.status(404).json({
        errors : err.errors,
        message : err.message
      })
      break;
  
    default:
      res.status(500).json({
        errors : 'Internal server error',
        message : 'Server error'
      })
      break;
  }

}