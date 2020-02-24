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
      const deletedRate = Rate.delete({
        where: {
          id
        }
      });
      // then
      res.status(200);
      res.json(deletedRate);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RateController;
