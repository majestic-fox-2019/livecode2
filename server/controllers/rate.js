const { Rate, Movie } = require('../models/index')

class RateController {
    static postRate(req, res, next) {
        console.log('Masuk post rate')
        const value = {
            reviewer: req.body.reviewer,
            point: Number(req.body.point),
            MovieId: Number(req.params.movieId)
        }
        Rate
            .create(value)
            .then(rate => {
                res.status(201).json(rate)
            })
            .catch(next)
    }

    static deleteRate(req, res, next) {
        console.log('masuk delete rate')
        const options = {
            where: {
                MovieId: req.params.movieId
            }
        }
        Rate
            .destroy(options)
            .then(result => {
                console.log(result)
                res.status(200).json({message: 'Delete rate success'})
            })
            .catch(next)
    }
}

module.exports = RateController