const indexRouter = require('express').Router()
const movieRouter = require('./movie')
const rateRouter = require('./rate')

indexRouter.use('/movies', movieRouter)
indexRouter.use('/rates', rateRouter)

module.exports = indexRouter
