const { Movie, Rate } = require('../models')
const createError = require('http-errors')

class MovieController {
    static showAll(req, res, next) {
        Movie
            .findAll({
                include: [Rate]
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static showById(req, res, next) {
        console.log('masuk sini')
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
                    res.status(200).json(data)
                }
            })
            .catch(next)
    }

    static updateMovie(req, res, next) {
        let { title, year, type, poster, imdbId } = req.body

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
                    data.update({
                        title,
                        year,
                        type,
                        poster,
                        imdbId
                    })
                }
            })
            .catch(next)
    }

    static addRate(req, res, next) {
        let movieId = req.params.movieId

        let { reviewer, point } = req.body

        Rate
            .create({
                reviewer,
                point,
                movieId
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
                    res.status(200).json(data)
                }
            })
            .catch(next)
    }
}

module.exports = MovieController