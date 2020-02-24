const route = require('express').Router()
const MovieController = require('../controllers/movie')

route.get('/movies', MovieController.showAllMovie)
route.get('/movies/:id', MovieController.showMovieById)
route.put('/movies/:id', MovieController.editMovie)
route.post('/rate/:movieId', MovieController.addRate)
route.delete('/rate/:id', MovieController.deleteRate)

module.exports = route