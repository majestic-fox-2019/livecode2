'use strict'
const { Rating } = require('../models')

class RatingController {
  static postRating(req, res, next) {
    const { name, rating, MovieId } = req.body
    console.log(name, rating, MovieId);
    Rating
      .create({
        name,
        rating,
        MovieId
      })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        // console.log(err);
        next(err)
      })
  }
  static destroyRating(req, res, next) {
    const ratingId = req.params.id;
    Rating
      .destroy({
        where: {
          id: ratingId
        }
      })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        next(err);
      })
  }

}

module.exports = RatingController