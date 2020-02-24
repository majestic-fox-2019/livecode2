const router = require('express').Router()
const Movie = require('../controllers/movies');
const isMovieExist = require('../middlewares/isMovieExist')

router.get('/', Movie.showMovies)
router.get('/:id', isMovieExist, Movie.showMoviesById)
router.put('/:id', isMovieExist, Movie.updateMovie)

module.exports = router