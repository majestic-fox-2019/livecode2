const { Rate } = require('../models/index')
const createError = require('http-errors')

module.exports = (req, res, next) => {
  Rate
    .findOne({
      where : {
        id : req.params.movieId
      }
    })
    .then(response => {
      if(response != null){
        next()
      }else{
        throw createError(404, { name : 'Nodata', errors : 'Nodata', message : 'Rate Not Found' })
      }
    })
    .catch(next)
}