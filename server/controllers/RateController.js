"use strict"

const {Rate} = require('../models');
class RateController {
    static addRateToAMovie(req, res, next) {
        const {reviewer, point} = req.body;
        const {movieId} = req.params;
        Rate
            .create({reviewer, point, MovieId: movieId})
            .then(rate => {
                res.status(201).json(rate);
            })
            .catch(err => {
                next(err);
            });
        
    }

    static deleteRateToAMovie(req, res, next) {
        Rate
            .destroy({
                where: {
                    id: Number(req.params.movieId)
                }
            })
            .then(() => {
                res.status(200).json({message: 'Delete rate success'});
            })
            .catch(err => {
                next(err);
            });
    }
}

module.exports = RateController;