const express = require('express');
const router = express.Router();
const moviesRouter = require('./movies');
const rateRouter = require('./rates');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/movies", moviesRouter);
router.use("/rate", rateRouter);

module.exports = router;
