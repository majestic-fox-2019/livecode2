const { Rate } = require('../models/index')

module.exports = class {
  static add(req, res, next) {
    let { reviewer, point } = req.body
    Rate.create(
      {
        reviewer,
        point,
        MovieId: req.params.movieId
      },
      {
        include: ['Movie']
      }
    )
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        console.log(err)
        res.status(400).json(err)
      })
  }

  static getAllByMovie(req, res, next) {
    Rate.findAll({
      where: {
        MovieId: req.params.movieId
      },
      include: ['Movie']
    })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        console.log(err)
        res.status(400).json(err)
      })
  }

  static delete(req, res, next) {
    Rate.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        res.status(200).json({
          message: 'Delete rate success'
        })
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
}
