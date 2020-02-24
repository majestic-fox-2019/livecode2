const express = require("express");
const router = express.Router();
const rateController = require("../controller/rateController");

router.post("/:MovieId", rateController.rating);
router.delete("/:id", rateController.deleteRate);
module.exports = router;
