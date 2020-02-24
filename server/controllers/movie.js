const { Movie,Rate } = require('../models')
class MovieController {
  static findAll(req,res,next){
    Movie
      .findAll()
      .then(movies => {
        res.status(200).json(movies)
      })
      .catch(next)
  }

  static findById(req,res,next){
    const id = req.params.id
    Movie
      .findByPk(id,{
        include:[{
          model:Rate
        }]
      })
      .then(movie => {
        if(movie){
          res.status(200).json(movie)
        }else{
          next({name:'notfound'})
        }
      })
      .catch(next)
  }

  static edit(req,res,next){
    const { title, year, type, poster} = req.body
    const id = req.params.id
    Movie
      .findByPk(id)
      .then(movie => {
        return movie.update({
          title,
          year,
          type,
          poster
        })
      })
      .then(movie => {
        res.status(200).json(movie)
      })
      .catch(next)
  }
}

module.exports = MovieController