const { Rate } = require("../models/index");

class RateController {
  static getRating(req, res, next) {
    Rate.findAll({ where: { MovieId: req.params.MovieId } })
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        next(err);
      });
  }
  static rating(req, res, next) {
    let isi = {
      reviewer: req.body.reviewer,
      point: req.body.point,
      MovieId: req.params.MovieId
    };
    console.log(isi);
    Rate.create(isi)
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        next(err);
      });
  }

  static deleteRate(req, res, next) {
    Rate.destroy({ where: { id: req.params.id } })
      .then(() => {
        let msg = "Delete rate succes";
        res.status(200).json({ msg });
      })
      .catch(err => {
        res.next(err);
      });
  }
}

module.exports = RateController;
