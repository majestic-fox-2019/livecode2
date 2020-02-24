const { Rate } = require('../models')

class RateController {
    static create(req, res, next) {
        const { point, reviewer } = req.body
        
    }

    static delete(req, res, next) {
        const id = req.params.id
        Rate.destroy( { where: { id: id }})
        .then(rate => {
            res.status(200).json({
                message: 'Delete rate success'
            })
        })
        .catch(next)
    }
}

module.exports = RateController