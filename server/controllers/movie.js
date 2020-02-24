const { Movie, Rate } = require('../models')

class Controller {
  static readAll(req, res, next) {
    Movie.findAll({
      order: [['id', 'ASC']]
    })
      .then((result) => {
        res.status(200).json(result)
      })
      .catch((err) => {
        next(err)
      })
  }

  static readOne(req, res, next) {
    Movie.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: Rate }]
    })
      .then((result) => {
        res.status(200).json(result)
      })
      .catch((err) => {
        next(err)
      })
  }

  static update(req, res, next) {
    let { title, year, type, poster } = req.body
    year = Number(year)
    Movie.update(
      {
        title,
        year,
        type,
        poster
      },
      {
        where: {
          id: req.params.id
        },
        returning: true,
        plain: true
      }
    )
      .then((result) => {
        res.status(200).json(result[1])
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = Controller
