const express = require('express')
const router = express.Router()
const rate = require('../controllers/rate')

router.post('/:movieId',rate.create)
router.delete('/:id',rate.delete)

module.exports = router