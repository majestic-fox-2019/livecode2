"use stritc"

const { Rating } = require('../models')

class RatingController {
    static create(req, res, next) {
        const body = {
            reviewer: req.body.reviewer,
            point: req.body.point,
            MovieId: req.params.movieId
        }
        for (let i in body) {
            if (body[i] === undefined) {
                body[i] = null
            }
        }
        Rating.create(body)
            .then(rate => {
                res.status(201).json(rate)
            })
            .catch(next)
    }

    static delete(req, res, next) {
        Rating.destroy({ where: { id: req.params.id } })
            .then((result) => {
                console.log(result)
                if (result == 1) {
                    res.status(200).json({ message: 'Delete rate success' })
                } else {
                    next({ message: 'Delete failed' })
                }
            })
            .catch(next)
    }


}


module.exports = RatingController