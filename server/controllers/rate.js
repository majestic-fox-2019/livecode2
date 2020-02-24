const { Rate } = require('../models')

class Controller {
  static create(req, res, next) {
    const { reviewer, point } = req.body
    console.log(req.body)
    Rate.create({
      reviewer,
      point,
      MovieId: req.params.movieId
    })
      .then((result) => {
        res.status(201).json(result)
      })
      .catch((err) => {
        next(err)
      })
  }

  static delete(req, res, next) {
    Rate.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        res.status(200).json({
          message: 'Delete rate success'
        })
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = Controller
