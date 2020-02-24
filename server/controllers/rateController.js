const { Rate, Movie } = require('../models')

class RateController {
  static rateMovie(req, res, next) {
    const movieId = req.params.movieId
    console.log(req.body)
    const data = {
      reviewer: req.body.reviewer,
      point: req.body.point,
      MovieId: movieId
    }
    if (data.point > 100) {
      throw { msg: 'Point can only between 0-100', code: 400 }
    } else {
      Rate.create(data)
        .then(result => {
          res.status(201).json(result)
        })
        .catch(next)
    }
  }

  static deleteRate(req, res, next) {
    const rateId = req.params.id
    Rate.destroy({ where: { id: rateId } })
      .then(response => {
        res.status(200).json({
          message: 'Delete rate success'
        })
      })
      .catch(next)
  }
}

module.exports = RateController
