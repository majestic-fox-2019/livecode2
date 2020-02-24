const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/MovieController')

router.get('/movies', MovieController.getAllMovies)
router.get('/movies/:id', MovieController.getDetailMovie)
router.put('/movies/:id', MovieController.updateMovie)

router.post('/rates/:movieId', MovieController.addRating)
router.delete('/rates/:id', MovieController.deleteRate)

module.exports = router