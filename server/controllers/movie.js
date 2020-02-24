const Movie = require('../models').Movie
const Rate = require('../models').Rate

class ControllerMovie {
  static showAllMovie(req, res, next) {
    Movie.findAll({include:Rate})
    .then(movies => {
      res.status(200).json(movies)
    })
    .catch(err => {
      next(err)
    })
  }

  static showMovieById(req, res, next) {
    Movie.findOne({where:{id:req.params.id}})
    .then(movie => {
      res.status(200).json(movie)
    })
    .catch(err => {
      err => {
        next(err)
      }
    })
  }

  static editMovie(req, res, next) {
    let movie
    let{title, year, type, poster, imdbId} = req.body
    Movie.update({title, year, type, poster, imdbId},{where:{id:req.params.id}}) 
    .then(() => {
      let obj= {
        id:'',
        title: '',
        year:'',
        type:'',
        poster:'',
        imdbId:'',
        createdAt:'',
        updatedAt:''
      }
      res.status(200).json(obj)
    })
    .catch(err => {
      next(err)
    })
  }

  static addRate(req, res, next) {
    let {reviewer, point} = req.body
    let MovieId = req.params.MovieId
    Rate.create({reviewer, point, MovieId})
    .then(rate => {
      let obj = {
        id:'',
        reviewer:'',
        MovieId:'',
        createdAt:'',
        updatedAt:''
      }
      res.status(201).json(obj)
    })
    .catch(err => {
      next(err)
    })
  }

  static deleteRate(req, res, next) {
    Rate.destroy({where:{id:req.params.id}})
    .then(() => {
      res.status(200).json({message: "Delete rate success"})
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = ControllerMovie