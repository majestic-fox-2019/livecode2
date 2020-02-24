const rate = require('express').Router()
const controller = require('../controllers/rate')

rate
    .post('/rate/:movieId', controller.postRate)
    .delete('/rate/:movieId', controller.deleteRate)

module.exports = rate