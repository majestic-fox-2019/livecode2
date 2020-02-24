const { Movie } = require("../models/index");

class MovieContoller {
  static getMovies(req, res, next) {
    Movie.findAll({})
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      });
  }

  static findOne(req, res, next) {
    Movie.findOne({
      where: { id: req.params.id }
    }).then(data => {
      res.status(200).json(data);
    });
  }

  static updateMovie(req, res, next) {
    let hasil = {};
    let isi = {
      title: req.body.title,
      year: req.body.year,
      type: req.body.type,
      poster: req.body.poster,
      imdbID: req.body.imdbID
    };
    console.log(isi);
    Movie.findOne({ where: { id: req.params.id } })
      .then(data => {
        if (data) {
          return Movie.update(isi, { where: { id: data.id } });
        } else {
          res.status(404).json("error");
        }
      })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = MovieContoller;
