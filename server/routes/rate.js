
const router = require('express').Router()
const ControllerRate = require('../controllers/rate')

router.post('/:MovieId', ControllerRate.postRate)
router.delete('/:id', ControllerRate.deleteRate)






module.exports = router