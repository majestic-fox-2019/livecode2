const { Movie, Rate } = require('../models')
const createError = require('http-errors')

class MovieController {
    static showAll(req, res, next) {
        let option
        if (req.params.type) {
            option = {
                type: req.params.type
            }
        } else {
            option = {}
        }

        if (req.params.title) {
            option = {
                title: req.params.title
            }
        }

        Movie
            .findAll({
                include: [Rate],
                where: option
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static showById(req, res, next) {
        Movie
            .findOne({
                where: {
                    id: req.params.id
                },
                include: [Rate]
            })
            .then(data => {
                if (!data) {
                    throw createError(404, 'Data not found')
                } else {
                    res.status(200).json(data)
                }
            })
            .catch(next)
    }

    static updateMovie(req, res, next) {
        let { title, year, type, poster, imdbID } = req.body
        if (!req.body.type) {
            type = null
        } else {
            type = type.toLowerCase()
        }

        Movie
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                if (!data) {
                    throw createError(404, 'Data not found')
                } else {
                    return data.update({
                        title,
                        year,
                        type,
                        poster,
                        imdbID
                    })
                }
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static addRate(req, res, next) {
        let MovieId = req.params.movieId

        let { reviewer } = req.body

        let point = req.body.point

        Rate
            .create({
                reviewer,
                point,
                MovieId
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(next)
    }

    static deleteRate(req, res, next) {
        let id = req.params.id

        Rate
            .findOne({
                where: {
                    id
                }
            })
            .then(data => {
                if (!data) {
                    throw createError(404, 'Data not found')
                } else {
                    return data.destroy()
                }
            })
            .then(data => {
                res.status(200).json({ message: "Delete rate success" })
            })
            .catch(next)
    }
}

module.exports = MovieController