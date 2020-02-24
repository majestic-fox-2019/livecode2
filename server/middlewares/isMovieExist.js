const { Movie } = require('../models/index')
const createError = require('http-errors')

module.exports = (req, res, next) => {
  Movie
    .findOne({
      where : {
        id : req.params.id
      }
    })
    .then(response => {
      if(response != null){
        next()
      }else{
        throw createError(404, { name: 'Nodata', errors : 'Nodata', message : 'Movie Not Found' })
      }
    })
    .catch(next)
}