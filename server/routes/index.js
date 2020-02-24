const router = require('express').Router()

const MovieController = require('../controllers/movieController')

router.get('/movies', MovieController.showAll)
router.get('/movies/:id', MovieController.showById)
router.get('/movies/find/:type', MovieController.showAll)
router.get('/movies/title/:title', MovieController.showAll)

router.put('/movies/:id', MovieController.updateMovie)

router.post('/rate/:movieId', MovieController.addRate)
router.delete('/rate/:id', MovieController.deleteRate)

module.exports = router