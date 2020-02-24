const express = require('express')
const router = express.Router()
const movie = require('../controllers/movie')

router.get('/',movie.findAll)
router.get('/:id',movie.findById)
router.put('/:id',movie.edit)

module.exports = router