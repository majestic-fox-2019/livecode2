const express = require('express');
const router = express.Router();
const moviesRouter = require('./movies');
const ratesRouter = require('./rates');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/movies", moviesRouter);
router.use("/rates", ratesRouter);

module.exports = router;
