const {Rate} = require("../models");
const createError = require("http-errors");

class Controller {
	static create(req, res, next) {
		const id = req.params.id
		const obj = {
			reviewer: req.body.reviewer, 
			point: req.body.point, 
			MovieId: id
		}
		Rate.create(obj)
		.then(data => {
			res.status(201).json(data);
		})
		.catch(err => {
			next(createError(500, "Internal server error!"));
		});
	}
	static destroy(req, res, next) {
		const id = req.params.id;
		const where = {
			where: {
				id: id
			}
		}
		Rate.destroy(where)
		.then(data => {
			if(!data) {
				next(createError(404, "Data not found!"));
			} else {
				res.status(200).json({message: "Delete rate success"});
			}
		})
		.catch(err => {
			next(createError(500, "Internal server error!"));
		});
	}
}

module.exports = Controller;
