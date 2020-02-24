const { Movie, Rate } = require('../models');

class MovieController {
  // show all movie
  static async showAll(req, res, next) {
    try {
      const foundMovies = await Movie.findAll({
        order: [["id"]]
      });
      // then
      res.status(200);
      res.json(foundMovies);
    } catch (err) {
      next(err);
    }
  }
  // show one movie
  static async showOne(req, res, next) {
    const { id } = req.params;
    try {
      const foundMovie = await Movie.findOne({
        where: {
          id
        },
        include: [Rate]
      });
      // then
      res.status(200);
      res.json(foundMovie);
    } catch (err) {
      next(err);
    }
  }
  // update movie
  static async updateOne(req, res, next) {
    const { id } = req.params;
    const { title, year, type, poster, imdbID } = req.body;
    try {
      const updatedMovie = await Movie.update({
        title, year, type, poster, imdbID
      }, {
        where: {
          id
        },
        returning: true
      })
      // then
      if (!updatedMovie[0]) {
        res.status(304);
        res.json({
          message: "No item is modified"
        });
      }
      else {
        res.status(200);
        res.json(updatedMovie[1][0]);
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MovieController;
