const express = require('express')
const router = express.Router()
const movieRouter = require('./movieRouter')
const ratingRouter = require('./ratingRouter')
const errorHandling = require('../middlewares/errorHandling')

router.use('/ratings', ratingRouter)
router.use('/movies', movieRouter)

router.use(errorHandling)

module.exports = router
