const router = require('express').Router()
const ratingController = require('../controllers/ratingController')

// /ratings

router.post('/', ratingController.postRating)
router.delete('/:id', ratingController.destroyRating)

module.exports = router