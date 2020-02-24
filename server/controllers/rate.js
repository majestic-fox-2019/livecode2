const { Rate } = require('../models')

class ControllerRate {
  static postRate(req, res, next) {
    let id = req.params.id
    let { reviewer, point } = req.body
    Rate
      .update({ reviewer, point }, { where: { id }, returning: true })
      .then(result => {
        res.send(201).json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }


  static deleteRate(req, res, next) {
    let id = req.params.id
    Rate
      .destroy({ where: { id } })
      .then(res => {
        res.status(200).json(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

module.exports = ControllerRate