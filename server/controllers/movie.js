const {Movie, Rate} = require("../models");
const createError = require("http-errors");

class Controller {
	static findAll(req, res, next) {
		const include = {
			include: {
				model: Rate
			}
		}
		Movie.findAll(include)
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			next(createError(500, "Internal server error!"));
		});
	}
	static findOne(req, res, next) {
		const id = req.params.id;
		const where = {
			where: {
				id: id
			}
		}
		Movie.findOne()
		.then(data => {
			if(!data) {
				next(createError(404, "Data not found!"));
			} else {
				res.status(200).json(data);
			}
		})
		.catch(err => {
			next(createError(500, "Internal server error!"));
		});
	}
	static update(req, res, next) {
		const id = req.params.id;
		const obj = {
			title: req.body.title, 
			year: req.body.year, 
			type: req.body.type, 
			poster: req.body.poster, 
		};
		const where = {
			where: {
				id: id
			}, 
			returning: true
		}
		Movie.findOne(where)
		.then(data => {
			obj.imdbID = data.imdbID;
			return Movie.update(obj, where);
		})
		.then(data => {
			res.status(200).json(data[1][0]);
		})
		.catch(err => {
			if(err.name == "SequelizeValidationError") {
				const arr = [];
				err.errors.forEach(el => {
					arr.push(el.message);
				});
				next(createError(400, arr.join(", ")));
			} else {
				next(createError(500, "Internal server error!"));
			}
		});
	}
}

module.exports = Controller;
