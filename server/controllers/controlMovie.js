const { Movie, Rating } = require("../models")

class ControlMovie {
    static getAllMovies(req, res, next) {
        Movie.findAll({ where: {} })
            .then(allMovies => {
                // console.log(allMovies)
                res.status(200).json(allMovies)
            })
            .catch(err => {
                next(err)
            })
    }

    static getById(req, res, next) {
        // console.log(req.params.id, "<< ini id")
        Movie.findOne({
            where: { id: req.params.id }, include: [Rating]
        })
            .then(foundMovieOne => {
                res.status(200).json(foundMovieOne)
            })
            .catch(err => {
                console.log(err, "<< error id")
                next(err)
            })
    }

    static updateMovie(req, res, next) {
        Movie.update({ title: req.body.title, year: req.body.year, type: req.body.type }, { where: { id: req.params.id }, returning: true, plain: true })
            .then(updated => {
                res.status(200).json(updated[1])
            })
            .catch(err => {
                console.log(err, "<< ini error update")
                next(err)
            })
    }
}
module.exports = ControlMovie