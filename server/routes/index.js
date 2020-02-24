const express = require('express');
const router = express.Router();
const movies = require('./movie')
const rate = require('./rate')

router.use('/movies', movies)
router.use('/rate', rate)

module.exports = router