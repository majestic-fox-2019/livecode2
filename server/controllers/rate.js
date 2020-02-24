'use strict';

const { Rate } = require('../models');
const createError = require('http-errors');

class RateController {
  static create(req, res, next) {
    const movieId = req.params.movieId;
    const rateData = {
      reviewer: req.body.reviewer,
      point: Number(req.body.point),
      MovieId: movieId
    };

    if (rateData.point > 100) {
      next(createError(400, { message: 'Point is 100 at max!' }));
    } else if (rateData.point <= 0) {
      next(createError(400, { message: 'Point cannot be 0 or less!' }));
    } else {
      Rate.create(rateData)
        .then(rate => {
          res.status(201).json({ rate, message: 'Create rate success!' });
        })
        .catch(err => {
          next(err);
        });
    }
  }

  static destroy(req, res, next) {
    const rateId = req.params.id;
    Rate.destroy({ where: { id: rateId } })
      .then(rate => {
        res.status(200).json({ message: 'Delete rate success!' });
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = RateController;
