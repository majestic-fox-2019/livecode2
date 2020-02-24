const {Movie, Rate} = require('../models')
const createError = require('http-errors')

class MovieController {

  static listAll(req, res, next){
    Movie.findAll({order: [['id', 'ASC']], include: Rate})
    .then(movie => {
      res.status(200).json(movie)
    })
    .catch(err => {
      next(err)
    })
  }

  static getById(req, res, next){
    Movie.findByPk(req.params.id)
    .then(movie => {
      if (!movie){
        throw createError(404, {message: {message: 'Movie Not Found'}})
      } else {
        res.status(200).json(movie)
      }
    })
    .catch(err => {
      next(err)
    })
  }

  static update(req, res, next){
    let movieId = {
      where: {
        id: req.params.id
      }
    }
    let movieData = {
      title: req.body.title,
      year: req.body.year,
      type: req.body.type,
      poster: req.body.poster,
    }
    Movie.update(movieData, movieId)
    .then(result => {
      console.log(result)
      if (result[0] == 0){
        throw createError(404, {message: {message: 'Movie Not Found'}})
      } else {
        return Movie.findByPk(req.params.id)
      }
    })
    .then(movie => {
      res.status(200).json(movie)
    })
    .catch(err => {
      next(err)
    })
  }

}

module.exports = MovieController