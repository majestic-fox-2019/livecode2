"use strict"

const {Movie} = require('../models');
class MovieController {
    static showMovie(req, res, next) {
        Movie
            .findAll()
            .then(movies => {
                res.status(200).json(movies);
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    }

    static showMovieRatesDetail(req, res, next) {
        Movie
            .findByPk(Number(req.params.id), {
                include: ["Rates"]
            })
            .then(movie => {
                res.status(200).json(movie);
            })
            .catch(err => {
                next(err);
            });
    }

    static updateMovieDetail(req, res, next) {
        const {title, year, type, poster, imdbId} = req.body;
        console.log(req.body);
        Movie
            .update({title, year, type, poster, imdbId}, {
                  where: {
                      id: Number(req.params.id)
                  },
                  returning: true
              })
              .then(updatedMovie => {
                  if (updatedMovie[1].length > 0) {
                    res.status(200).json(updatedMovie[1][0]);
                  }else{
                      throw{
                          statusCode: 404,
                          message: 'Movie not found!'
                      }
                  }
              })
              .catch(err => {
                  next(err);
              })
    }
}

module.exports = MovieController;