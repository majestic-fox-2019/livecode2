const router = require('express').Router()
const Rate = require('../controllers/rate')
const isRateExist = require('../middlewares/isRateExist')
const isMovieExist = require('../middlewares/isMovieExist')

router.post('/:movieId', Rate.addRateMovie)
router.delete('/:id', isRateExist, Rate.deleteRates)

module.exports = router