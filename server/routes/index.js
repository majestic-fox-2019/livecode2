const router = require('express').Router()
const MovieRouter = require('./movie');
const RateRouter = require('./rate')

router.use('/movies', MovieRouter)
router.use('/rates', RateRouter)

module.exports = router