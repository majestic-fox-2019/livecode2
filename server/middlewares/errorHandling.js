
function showError(err, req, res, next) {
  // console.log(err, 'masuk error handling gak?');
  let errors = []
  if (err.name == 'SequelizeValidationError') {
    err.errors.forEach(elEror => {
      errors.push(elEror.message)
    });
    res.status(404).json(errors)
    console.log(errors);
    
  }
}

module.exports = showError
