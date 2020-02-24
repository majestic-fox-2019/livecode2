const { Movie, Rate} = require('../models')

class MovieController {
    static getAllMovies (req, res, next) {
        Movie.findAll()
        .then(movies => {
            res.status(200).json(movies)
        })
        .catch(err => next(err))
    }
    
    static findOneMovie (req, res, next) {
        Movie.findOne({
            where: {
                id: req.params.id
            },
            include: [{model: Rate}]
        })
        .then(movieData => {
            res.status(200).json(movieData)
        })
        .catch(err => next(err))
    }

    static updateMovie (req, res, next) {
        let {
            title,
            year,
            type,
            poster
        } = req.body
        Movie.update({
            title,
            year,
            type,
            poster
        },{
            where: {
                id:req.params.id
            }
        })
        .then(updatedMovie => {
            res.status(200).json(updatedMovie)
        })
        .catch(err => next(err))
    }

    static filterByType (req, res, next) {
        Movie.findAll({
            where: {
              type: req.params.type
            }
        })
        .then(filteredMovie => {
            if(!filteredMovie) {
                throw({
                    name: 'customError',
                    errors: 'type not found',
                    message: "Type must be 'movie' or 'series'"
                })
            } else {
                res.status(200).json(filteredMovie)
            }
        })
        .catch(err => next(err))
    }
}

module.exports = MovieController