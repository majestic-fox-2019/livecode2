const express = require('express')
const router = express.Router()
const ratesController = require('../controllers/ratesController')

// define the home page route
router.post('/:movieId', ratesController.addRating)
router.delete('/:id', ratesController.deleteRating)


module.exports = router