const { Movie, Rate } = require('../models/index')

module.exports = class {
  static getById(req, res, next) {
    let MovieSearched = null
    Movie.findByPk(req.params.id)
      .then(result => {
        MovieSearched = result
        return Rate.findAll({
          where: {
            MovieId: req.params.id
          }
        })
      })
      .then(result => {
        // let newRates = []
        // result.forEach(element => {
        //   newRates.push(element.dataValues)
        // })

        MovieSearched.dataValues.Rates = result
        console.log(MovieSearched, 'ini apa sih')

        res.status(200).json(MovieSearched)
      })
      .catch(err => {
        console.log(err)
        res.status(400).json(err)
      })
  }
  static getAll(req, res, next) {
    Movie.findAll()
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        console.log(err)
        res.status(400).json(err)
      })
  }

  static update(req, res, next) {
    Movie.update(req.body, {
      where: {
        id: req.params.id
      },
      plain: true,
      returning: true
    })
      .then(result => {
        res.status(200).json(result[1])
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
}
