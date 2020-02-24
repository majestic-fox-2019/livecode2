const {Rate} = require('../models')
const createError = require('http-errors')

class RateController {

  static list(req, res, next){
    Rate.findAll({where: {MovieId: req.params.movieId}})
    .then(rate => {
      res.status(200).json(rate)
    })
    .catch(err => {
      next(err)
    })
  }

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
      res.status(200).json({"message": "Delete rate success"})
    })
    .catch(err => {
      next(err)
    })
  }

}

module.exports = RateController