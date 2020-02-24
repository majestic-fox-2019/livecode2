const { Movie, Rating } = require("../models")

class ControlRating {
    static postRating(req, res, next) {
        if (req.body.point < 0) {
            throw ({ code: 400, message: "cant be below 0" })
        } else if (req.body.point > 100) {
            throw ({ code: 400, message: "cant be above 100" })
        }
        Rating.create({
            reviewer: req.body.reviewer,
            MovieId: req.params.id,
            point: req.body.point
        })
            .then(created => {
                res.status(201).json(created)
            })
            .catch(err => {
                next(err)
            })
    }
}
module.exports = ControlRating