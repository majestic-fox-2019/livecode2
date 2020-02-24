const router = require('express').Router()
const controller = require('../controllers/movieController')

router.get('/', controller.getAllMovies)

router.get('/type/:type', controller.filterByType)

router.get('/:id', controller.findOneMovie)

router.put('/:id', controller.updateMovie)

module.exports = router