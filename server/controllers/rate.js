const {Rate} = require('../models')
const createError = require('http-errors')

class RateController {

  static add(req, res, next){
    let rateData = {
      reviewer: req.body.reviewer,
      point: req.body.point,
      MovieId: req.params.movieId
    }
    Rate.create(rateData)
    .then(rate => {
      res.status(201).json(rate)
    })
    .catch(err => {
      next(err)
    })
  }

  static delete(req, res, next){
    let rateId = {
      where: {
        id: req.params.id
      }
    }
    Rate.destroy(rateId)
    .then(result => {
      if (result[0] == 1){
        res.status(200).json({"message": "Delete rate success"})
      } else {
        throw createError(404, {message: {message: 'Rate not found'}})
      }
    })
    .catch(err => {
      next(err)
    })
  }

}

module.exports = RateController