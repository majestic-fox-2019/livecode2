const router = require('express').Router()
const controller = require('../controllers/rateController')

router.post('/:movieId', controller.addRating)

router.delete('/:id', controller.deleteRate)

module.exports = router