"use strict"

const { Movie, Rating } = require('../models')

class MovieController {
    static findAll(req, res, next) {
        Movie.findAll()
            .then(movies => {
                res.status(200).json(movies)
            })
            .catch(next)
    }

    static findOne(req, res, next) {
        Movie.findByPk(req.params.id, { include: [{ model: Rating }] })
            .then(movie => {
                res.status(200).json(movie)
            })
            .catch(next)
    }

    static update(req, res, next) {
        const body = {
            title: req.body.title,
            year: req.body.year,
            type: req.body.type,
            poster: req.body.poster
        }
        for (let i in body) {
            if (body[i] === undefined) {
                body[i] = null
            }
        }
        Movie.update(body, {
            where: { id: req.params.id }, returning: true,
            plain: true
        })
            .then(movie => {
                res.status(200).json(movie)
            })
            .catch(next)
    }
}

module.exports = MovieController