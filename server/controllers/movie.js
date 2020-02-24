const { Movie, Rate } = require('../models')
// const { Rate } = require('../models')
class ControllerMovie {
  static allMovie(req, res, next) {
    Movie
      .findAll({
        include: [{ model: Rate }]
      })
      .then(resultAll => {
        res.status(200).json(resultAll)
        console.log(resultAll.id)
      })
      .catch(err => {
        console.log(err)
      })
  }

  static movieById(req, res, next) {
    let id = req.params.id
    Movie
      .findOne({ where: { id: id } })
      .then(result => {
        res.send(200).json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  static updateById(req, res, next) {
    let { title, year, imdbID, type, poster } = req.body
    let { id } = req.params.id
    Movie
      .update({ title, year, imdbID, type, poster }, { where: { id: id }, returning: true })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

}

module.exports = ControllerMovie