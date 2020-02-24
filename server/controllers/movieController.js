const { Movie, Rate } = require('../models');

class MovieController {
  // show all movie
  static async showAll(req, res, next) {
    try {
      const foundMovies = await Movie.findAll();
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
        }
      })
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MovieController;
