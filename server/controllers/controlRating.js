const { Movie, Rating } = require("../models")

class ControlRating {
    static postRating(req, res, next) {
        console.log("masuk post rating")
        console.log(req.body, req.params)
        if (req.body.point < 0) {
            throw ({ code: 400, message: "cant be below 0" })
        } else if (req.body.point > 100) {
            throw ({ code: 400, message: "cant be above 100" })
        }
        Rating.create({
            reviewer: req.body.reviewer,
            MovieId: req.params.movieId,
            point: req.body.point
        })
            .then(created => {
                res.status(201).json(created)
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteRating(req, res, next) {
        Rating.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.status(200).json({ message: "Delete rate success" })
            })
            .catch(err => {
                next(err)
            })
    }
}
module.exports = ControlRating