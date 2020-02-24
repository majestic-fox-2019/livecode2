const {Movie, Rate} = require('../models')

class ComicController {
  static list(req,res,next) {
    Movie.findAll()
      .then(movies=>{
        res.status(200).json(movies)
      })
      .catch(error=>{
        next(error)
      })
  }
  static find(req,res,next) {
    let {id} = req.params
    Movie.findOne({
      where: {
        id,
      },
      include: [Rate]
    })
      .then(movies=>{
        res.status(200).json(movies)
      })
      .catch(error=>{
        next(error)
      })
  }
  static update(req,res,next) {

  }
}

module.exports = ComicController