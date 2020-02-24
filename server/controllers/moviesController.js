const { Movie, Rate } = require('../models')

class MovieController {
  static showMovies(req, res, next) {
    Movie
      .findAll()
      .then(movies => {
        res.status(200).json(movies)
      })
      .catch(next)
  }

  static getOneMovie(req, res, next) {
    let id = req.params.id
    Movie
      .findOne({
        where: {
          id: id
        },
        include: Rate
      })
      .then(movie => {
        if (movie) {
          res.status(200).json(movie)
        } else {
          let err = {
            statusCode: 404,
            message: 'Movie not found!'
          }
          throw err
        }
      })
      .catch(next)
  }
  static updateMovie(req, res, next) {
    let id = req.params.id
    let movie = {
      title: req.body.title,
      year: req.body.year,
      type: req.body.type,
      poster: req.body.poster,
      imdbID: req.body.imdbID
    }
    Movie
      .update(movie, {
        where: {
          id: id
        },
        returning: true
      })
      .then(movie => {
        if (movie[0]) {
          res.status(200).json(movie[1][0])
        } else {
          let err = {
            statusCode: 404,
            message: 'Movie not found!'
          }
          throw err
        }
      })
      .catch(next)
  }
}
module.exports = MovieController