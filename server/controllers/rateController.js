const { Rate } = require('../models');

class RateController {
  // create rate
  static async createRate(req, res, next) {
    const { MovieId } = req.params;
    const { reviewer, point } = req.body;
    try {
      const createdRate = await Rate.create({
        MovieId, reviewer, point
      });
      // then
      res.status(201);
      res.json(createdRate);
    } catch (err) {
      next(err);
    }
  }
  // delete rate
  static async deleteRate(req, res, next) {
    const { id } = req.params;
    try {
      const foundRate = await Rate.findOne({
        where: {
          id
        }
      });
      const deletedRate = await Rate.destroy({
        where: {
          id
        }
      });
      // then
      if (!deletedRate) {
        res.status(304);
        res.json({
          message: "No item is modified"
        })
      }
      else {
        res.status(200);
        res.json(foundRate);
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RateController;
