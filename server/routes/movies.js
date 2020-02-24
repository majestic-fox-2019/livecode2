const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/moviesController')

// define the home page route
router.get('/', moviesController.showMovies)
router.get('/:id', moviesController.getOneMovie)
router.put('/:id', moviesController.updateMovie)


module.exports = router