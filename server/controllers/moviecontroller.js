const { Movie } = require('../models')

class MovieController{

  static getAllData(req,res,next){
    Movie
    .findAll()
    .then(data => {
      res.json(data)
    })
  }
}

module.exports = MovieController