const router = require('express').Router()
const controller = require('../controller/movieController')

router.get('/movies', controller.list)
router.get('/movies/:id', controller.find)
router.put('/movies/:id', controller.update)



module.exports = router