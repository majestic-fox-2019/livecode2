const { Movie } = require('../models')

class MovieController {
    static readAll(req, res, next) {
        Movie.findAll()
        .then(movies => {
            res.status(200).json(movies)
        })
        .catch(next)
    }

    static readOne(req, res, next) {
        const id = req.params.id
        Movie.findByPk(id, { include: ['Rates'] })
        .then(movie => {
            res.status(200).json(movie)
        })
        .catch(next)
    }

    static update(req, res, next) {
        const { title, year, imdbID, type, poster } = req.body
        const id = req.params.id
        let movieFound = null
        Movie.findByPk(id)
        .then(movie => {
            if(movie) {
                movieFound = movie
                Movie.update(
                    {
                        title,
                        year,
                        imdbID,
                        type,
                        poster
                    },
                    {
                        where: { id: id }
                    }
                )
                .then(movie => {
                    res.status(200).json({
                        id: movieFound.id,
                        title: title,
                        year: year,
                        type: type,
                        poster: poster,
                        imdbID: imdbID,
                        createdAt: movieFound.createdAt,
                        updatedAt: movieFound.updatedAt
                    })
                })
                .catch(next)
            } else {
                next({status: 400, message: 'Movie not Found'})
            }
        })
        .catch(next)
    }

}

module.exports = MovieController