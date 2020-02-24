const { Movie, Rate } = require('../models')

class MovieController {
  static getAllMovies(req, res, next) {
    Movie.findAll()
      .then(results => {
        res.status(200).json(results)
      })
      .catch(next)
  }

  static getDetailsMovie(req, res, next) {
    const id = req.params.id
    Movie.findOne({
      where: { id: id },
      include: [{ model: Rate, attributes: ['id', 'point', 'reviewer'] }]
    })
      .then(result => {
        if (!result) {
          throw { msg: 'Movie not found', code: 404 }
        } else {
          res.status(200).json(result)
        }
      })
      .catch(next)
  }

  static editMovie(req, res, next) {
    const id = req.params.id
    const data = {
      title: req.body.title,
      year: req.body.year,
      imdbID: req.body.imdbID,
      type: req.body.type,
      poster: req.body.poster
    }
    Movie.update(data, { where: { id: id }, returning: true })
      .then(result => {
        res.status(200).json(result[1][0])
      })
      .catch(next)
  }
}

module.exports = MovieController
