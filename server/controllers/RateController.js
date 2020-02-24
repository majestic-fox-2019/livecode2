const { Rate } = require('../models')

class RateController {
    static create(req, res, next) {
        const { point, reviewer } = req.body
        const MovieId = req.params.id
        Rate.create(
            {
                MovieId,
                point,
                reviewer
            }
        )
        .then(rate => {
            res.status(201).json({
                id: rate.id,
                MovieId,
                point,
                reviewer,
                createdAt: rate.createdAt,
                updatedAt: rate.updatedAt
            })
        })
        .catch(next)
    }

    static delete(req, res, next) {
        const id = req.params.id
        Rate.destroy( { where: { id: id }})
        .then(rate => {
            res.status(200).json({
                message: 'Delete rate success'
            })
        })
        .catch(next)
    }
}

module.exports = RateController