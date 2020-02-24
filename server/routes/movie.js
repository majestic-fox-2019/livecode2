const router = require('express').Router()
const MovieController = require('../controllers/movieController')

router.get('/', MovieController.getAllMovies)
router.get('/:id', MovieController.getDetailsMovie)
router.put('/:id', MovieController.editMovie)

module.exports = router
