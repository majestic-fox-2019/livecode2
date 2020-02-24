const { Rate } = require('../models')
const createError = require('http-errors')

class Controller {
  static create(req, res, next) {
    const { reviewer,
      point,
      MovieId } = req.body
    Rate.create({
      reviewer,
      point,
      MovieId
    })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
  static destroy(req, res, next) {
    Rate.destroy({
      where: { id: req.params.id }
    })
      .then(data => {
        if (data === 1) {
          res.status(200).json({
            "message": "Delete rate success"
          })
        } else {
          throw createError(404, 'Data Not Found')
        }
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = Controller