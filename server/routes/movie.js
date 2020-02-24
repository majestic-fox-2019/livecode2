const movie = require('express').Router()
const controller = require('../controllers/movie')
movie
    .get('/movies', controller.getMovies)
    .get('/movies/:id', controller.getMovieById)
    .put('/movies/:id', controller.putMovie)

module.exports = movie