const { Rate } = require('../models')

class RateController {
  static addRating(req, res, next) {
    let rate = {
      reviewer: req.body.reviewer,
      point: Number(req.body.point),
      MovieId: req.params.movieId
    }
    console.log(rate)
    Rate
      .create(rate)
      .then(rate => {
        res.status(201).json(rate)
      })
      .catch(next)
  }

  static deleteRating(req, res, next) {
    let id = req.params.id
    Rate
      .destroy({
        where: {
          id: id
        }
      })
      .then(result => {
        if (result) {
          res.status(200).json({
            "message": "Delete rate success"
          })
        } else {
          let err = {
            statusCode: 404,
            message: 'Rates not found!'
          }
          throw err
        }
      })
      .catch(next)
  }
}
module.exports = RateController