const { Movie, Rate } = require('../models/index')

class MovieController {
    static getMovies(req, res, next) {
        console.log('Masuk movie')
        Movie
            .findAll()
            .then(movies => {
                res.status(200).json(movies)
            })
            .catch(next)
    }

    static getMovieById(req, res, next) {
        console.log('masuk get move by id')

        const id = req.params.id
        const options = {
            where: { id },
            include: { model: Rate }
        }
        Movie
            .findOne(options)
            .then(movie => {
                res.status(200).json(movie)
            })
    }

    static putMovie(req, res, next) {
        console.log('masuk update movie')
        console.log(req.body)
        const { title, year, type, poster } = req.body

        const value = {
            title, //required
            year, //required
            type, //required (series or movie only)
            poster //required
        }

        const options = {
            where: {
                id: req.params.id
            },
            returning: true
        }
        Movie
            .update(value, options)
            .then(result => {
                res.status(200).json(result[1][0])
            })
            .catch(next)
    }
}

module.exports = MovieController