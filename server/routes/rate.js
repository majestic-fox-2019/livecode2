const rateRouter = require('express').Router()
const rateControllers = require('../controllers/rate')

rateRouter.post('/:movieId', rateControllers.add)
rateRouter.delete('/:id', rateControllers.delete)

module.exports = rateRouter
