'use strict';
module.exports = (sequelize, DataTypes) => {
	const Model = sequelize.Sequelize.Model;
	class Movie extends Model {};
	Movie.init({
		title: {
			type: DataTypes.STRING,
			allowNull: false, 
			validate: {
				notNull: {
					args: true, 
					message: "Please fill `Title`"
				}, 
				notEmpty: {
					args: true, 
					message: "Pleasse fill `Title`"
				}
			}
		}, 
		year: {
			type: DataTypes.INTEGER,
			allowNull: false, 
			validate: {
				notNull: {
					args: true, 
					message: "Please fill `Year`"
				}, 
				notEmpty: {
					args: true, 
					message: "Please fill `Year`"
				}
			}
		}, 
		type: {
			type: DataTypes.STRING,
			allowNull: false, 
			validate: {
				notNull: {
					args: true, 
					message: "Please fill `Type`"
				}, 
				notEmpty: {
					args: true, 
					message: "Please fill `Type`"
				}, 
				checkType(val) {
					if(val != "movie" && val != "series") {
						throw Error("Please choose between `movie` or `series`");
					}
				}
			}
		}, 
		poster: {
			type: DataTypes.STRING,
			allowNull: false, 
			validate: {
				notNull: {
					args: true, 
					message: "Please fill `Poster`"
				}, 
				notEmpty: {
					args: true, 
					message: "Please fill `Poster`"
				}
			}
		}, 
		imdbID: {
			type: DataTypes.STRING,
			allowNull: false, 
			validate: {
				notNull: {
					args: true, 
					message: "Please fill `IMDB ID`"
				}, 
				notEmpty: {
					args: true, 
					message: "Please fill `IMDB ID`"
				}
			}
		}
	}, {sequelize});
 	Movie.associate = function(models) {
   		Movie.hasMany(models.Rate);
  	};
  	return Movie;
};
