"use strict"

const { Movie } = require('../models')
const { Rating } = require('../models')

class controllerMovie {
    static findAll(req, res, next) {
        Movie.findAll({
            include: [{
                model: Rating
            }]
        })
            .then((movies) => {
                res.status(200).json(movies)
            }).catch(next);
    }
    static findOne(req, res, next) {
        Movie.findOne(
            {
                where: {
                    id: req.params.id
                },
                include: [{
                    model: Rating
                }]
            })
            .then((movie) => {
                res.status(200).json(movie)
            }).catch(next);
    }
    static updateMovie(req, res, next) {
        const { title, year, imdbID, type, poster } = req.body
        Movie.update({
            title,
            year,
            imdbID,
            type,
            poster
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                return Movie.findOne({
                    where: {
                        id: req.params.id
                    }
                })
            })
            .then((oneMovie) => {
                res.status(200).json(oneMovie)
            })
            .catch(next);
    }
}

module.exports = controllerMovie