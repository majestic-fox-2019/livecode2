const router = require('express').Router()

const Controller = require('../controllers/movie')

router.get('/', Controller.readAll)

router.get('/:id', Controller.readOne)

router.put('/:id', Controller.update)

module.exports = router
