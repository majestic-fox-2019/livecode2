const { Movie, Rate } = require('../models')

class MovieController {
  static getAllMovies(req, res, next){
    Movie.findAll({
      order: [['id', 'ASC']]
    })
    .then(movies => {
      res.status(200).json(movies)
    })
    .catch(err => {
      next(err)
    })
  }

  static getDetailMovie(req, res, next){
    const id_movie = Number(req.params.id)
    Movie.findOne({
      include: [Rate],
      where: { id: id_movie }
    })
    .then(movie => {
      if(movie){
        res.status(200).json(movie)
      }else{
        throw{
          error: 404,
          message: "Movie not found"
        }
      }
    })
    .catch(err => {
      next(err)
    })
  }

  static updateMovie(req, res, next){
    let updateData = {
      title: req.body.title,
      year: req.body.year,
      type: req.body.type,
      poster: req.body.poster,
      imdbID: req.body.imdbID,
      updatedAt: req.body.updateAt
    }
    
    const id_movie = Number(req.params.id)
    let updateMovie

    Movie.findOne({
      where: { id: id_movie }
    })
    .then(result => {
      if(result){
        updateMovie = result
        result.update(updateData, { returning : true })
      }else{
        throw{
          error: 404,
          message: "Movie not found"
        }
      }
    })
    .then(() => {
      res.status(200).json(updateMovie)
    })
    .catch(err => {
      next(err)
    })
  }

  static addRating(req, res, next){
    const id_movie = Number(req.params.movieId)
    let ratingData = {
      reviewer: req.body.reviewer,
      point: Number(req.body.point),
      MovieId: id_movie,
    }
    Rate.create(ratingData)
    .then(newrate => {
      res.status(201).json(newrate)
    })
    .catch(err => {
      next(err)
    })
  }

  static deleteRate(req, res, next){
    const id_rate = Number(req.params.id)
    Rate.findOne({
      where: { id: id_rate }
    })
    .then(rate => {
      if(rate){
        rate.destroy()
      }else{
        throw{
          error: 404,
          message: "ID Rate not found"
        }
      }
    })
    .then(() => {
      res.status(200).json({
        message: "Delete rate success"
      })
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = MovieController