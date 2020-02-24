const movieRouter = require('express').Router()
const movieControllers = require('../controllers/movie')

movieRouter.get('/', movieControllers.listAll)
movieRouter.get('/:id', movieControllers.getById)
movieRouter.put('/:id', movieControllers.update)

module.exports = movieRouter
