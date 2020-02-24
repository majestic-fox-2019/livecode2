const express = require('express')
const router = express.Router()

const ratingController = require('../controllers/ratingController')

router.post('/:movieId', ratingController.create)
router.delete('/:id', ratingController.delete)

module.exports = router