
module.exports = (err, req, res, next) => {
  
  switch (err.name) {
      case 'SequelizeValidationError': {
        const temp = []
        err.errors.forEach(error => {
            temp.push(error.message)
        })
          res.status(400).json({ message: temp })
          break
      }

      case 'NotFoundError': {
          res.status(404).json({ message: err.message })
          break
      }
   
      default: {
          res.status(500).json({
              message: 'Internal server error'
          })
      }
  }
}