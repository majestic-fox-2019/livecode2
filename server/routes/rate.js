const router = require('express').Router()

const Controller = require('../controllers/rate')

router.post('/:movieId', Controller.create)

router.delete('/:id', Controller.delete)

module.exports = router
