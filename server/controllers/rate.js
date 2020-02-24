const  { Rate } = require('../models/index')

class RateController {

  static addRateMovie(req, res, next){
    const objValue = {
      point : req.body.point,
      reviewer : req.body.reviewer,
      MovieId : req.params.movieId
    }

    Rate
      .create(objValue)
      .then(response => {
        res.status(201).json({
          status: 201,
          body : response
        })
      })
      .catch(next)
  }

  static deleteRates(req, res, next){
    Rate
      .destroy({
        where : {
          id : req.params.id
        }
      })
      .then(response => {
        res.status(200).json({
          status : 200,
          body : {
            message : 'Delete rate success'
          } 
        })
      })
  }

}

module.exports = RateController