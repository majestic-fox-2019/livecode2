const rateRouter = require('express').Router()
const rateControllers = require('../controllers/rate')

rateRouter.get('/:movieId', rateControllers.list)
rateRouter.post('/:movieId', rateControllers.add)
rateRouter.delete('/:id', rateControllers.delete)

module.exports = rateRouter
