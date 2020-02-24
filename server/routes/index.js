var express = require('express')
var router = express.Router()

/* GET home page. */
router.use('/movies', require('./movies'))
router.use('/rates', require('./rates'))

module.exports = router
