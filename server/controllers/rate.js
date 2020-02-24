const { Rate } = require('../models')
class MovieController {
  static create(req,res,next){
    const { reviewer,point } = req.body
    const MovieId = req.params.movieId
    Rate
      .create({
        reviewer,
        point,
        MovieId
      })
      .then(rate => {
        res.status(201).json(rate)
      })
      .catch(next)
  }

  static delete(req,res,next){
    const id = req.params.id
    let deleted = null
    Rate
      .findByPk(id)
      .then(rate => {
        deleted = rate
        return rate.destroy()
      })
      .then(rate => {
        res.status(200).json({
          "message": "Delete rate success"
        })
      })
      .catch(next)
  }
}

module.exports = MovieController