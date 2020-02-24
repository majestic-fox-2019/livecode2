const express = require("express");
const router = express.Router();
const rateController = require("../controller/rateController");

router.get("/:MovieId", rateController.getRating);
router.post("/:MovieId", rateController.rating);
router.delete("/:id", rateController.deleteRate);
module.exports = router;
