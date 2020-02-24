'use strict';

const movieRouter = require('express').Router();
const MovieController = require('../controllers/movie');

movieRouter.get('/', MovieController.findAll);
movieRouter.get('/:id', MovieController.findOne);
movieRouter.put('/:id', MovieController.update);

module.exports = movieRouter;
