const router = require('express').Router()
const MovieController = require('../controllers/MovieController')
const RateController = require('../controllers/RateController')

router.get('/movies', MovieController.readAll)
router.get('/movies/:id', MovieController.readOne)
router.put('/movies/:id', MovieController.update)

router.post('/rate/:movieId', RateController.create)
router.delete('/rate/:id', RateController)

module.exports = router