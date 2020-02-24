const router = require('express').Router()
const RateController = require('../controllers/rateController')

router.post('/:movieId', RateController.rateMovie)
router.delete('/:id', RateController.deleteRate)

module.exports = router
