const rate = require('express').Router()
const controller = require('../controllers/rate')

rate
    .post('/rates/:movieId', controller.postRate)
    .delete('/rates/:movieId', controller.deleteRate)

module.exports = rate