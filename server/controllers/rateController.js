const { Rate } = require('../models')

class RateController {
    static addRating (req, res, next) {
        const {
            reviewer,
            point
        } = req.body
        Rate.create({
            reviewer,
            point,
            MovieId: req.params.movieId
        })
        .then(createdRate => {
            res.status(201).json(createdRate)
        })
        .catch(err => next(err))
    }

    static deleteRate (req, res, next) {
        Rate.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(deletedRate => {
            res.status(200).json({
                message: 'Delete rate success'
            })
        })
        .catch(err => next(err))
    }
}

module.exports = RateController