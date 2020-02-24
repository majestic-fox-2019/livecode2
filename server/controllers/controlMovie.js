const { Movie, Rating } = require("../models")
const { Op } = require("sequelize")

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

    static filterCategory(req, res, next) {
        console.log(req.params, "<<<")
        Movie.findAll({ where: { type: req.params.category } })
            .then(ya => {
                res.status(200).json(ya)
            })
            .catch(err => {
                console.log(err, "<< ini error")
                next(err)
            })
    }

    static fitlerByTitle(req, res, next) {
        console.log("MASUK KOK")
        let searchnya = `%${req.params.search}%`
        Movie.findAll({
            // where: {
            //     $or: [
            //         { title: { $or: searchnya } }
            //     ]
            // }
            where: {
                [Op.like]: searchnya
            }

        })
            .then(filteredTitle => {
                res.status(200).json(filteredTitle)
            })
            .catch(err => {
                console.log(err, "<< ini erro filter")
                next(err)
            })
    }
}
module.exports = ControlMovie