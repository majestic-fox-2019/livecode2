"use strict"

const { Rating } = require('../models')

class controllerRating {
    static addRate(req, res, next) {
        console.log(Number(req.body.point));
        Rating.create({
            reviewer: req.body.reviewer,
            point: Number(req.body.point),
            MovieId: req.params.movieId
        })
            .then((rate) => {
                res.status(201).json(rate)
            }).catch(next);
    }
    static deleteRate(req, res, next) {
        Rating.destroy({
            where: {
                id: req.params.movieId
            }
        })
            .then((rate) => {
                res.status(200).json(rate)
            }).catch(next);
    }
}

module.exports = controllerRating