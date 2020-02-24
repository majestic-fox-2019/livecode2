'use strict'
const { Movie } = require('../models')
const { Rating } = require('../models')

class MovieController {
  static readAll(req, res, next) {
    Movie
      .findAll({ include: Rating })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        console.log(err);
      })
  }

  static updateMovie(req, res, next) {
    const { title, year, imdbID, type, poster } = req.body
    const id = req.params.id 
    Movie
      .update({
        title,
        year,
        imdbID,
        type,
        poster
      }, {
        where: {
        id: id
      }})
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = MovieController