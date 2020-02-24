'use strict'

const express = require('express')
const route = express.Router()
const RateController = require('../controllers/rate')

route.post('/:id', RateController.create)
route.delete('/:id', RateController.delete)

module.exports = route