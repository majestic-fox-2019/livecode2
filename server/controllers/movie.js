'use strict';

const { Movie } = require('../models');

class MovieController {
  static findAll(req, res, next) {
    Movie.findAll({include: ['Rates']})
      .then(movies => {
        res.status(200).json({ movies });
      })
      .catch(err => {
        next(err);
      });
  }

  static findOne(req, res, next) {
    const movieId = Number(req.params.id);
    Movie.findOne({ where: { id: movieId }, include: ['Rates'] })
      .then(movie => {
        res.status(200).json({ movie });
      })
      .catch(err => {
        next(err);
      });
  }

  static update(req, res, next) {
    const movieId = Number(req.params.id);
    const movieData = {
      title: req.body.title,
      year: Number(req.body.year),
      type: req.body.type,
      poster: req.body.poster
    };
    Movie.update(movieData, { where: { id: movieId } })
      .then(movie => {
        res.status(200).json({ movie: movieData, message: 'Successfully updated movie!' });
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = MovieController;
