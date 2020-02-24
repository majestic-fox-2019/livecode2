const route = require('express').Router()
const MovieController = require('../controllers/movie')

route.get('/movies', MovieController.showAllMovie)
route.get('/movies/:id', MovieController.showMovieById)
route.put('/movies/:id', MovieController.editMovie)
route.get('/rates/:movieId', MovieController.showRate)
route.post('/rates/:movieId', MovieController.addRate)
route.delete('/rates/:id', MovieController.deleteRate)

module.exports = route