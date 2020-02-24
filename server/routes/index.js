const express = require('express')
const router = express.Router()
const MovieRouter = require('./MovieRouter')

router.use('/', MovieRouter)

module.exports = router