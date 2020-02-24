var express = require('express')
var router = express.Router()
const Rate = require('../controllers/RateControllers')

/* GET users listing. */

router.post('/:movieId', Rate.add)
router.get('/:movieId', Rate.getAllByMovie)
router.delete('/:id', Rate.delete)

module.exports = router
