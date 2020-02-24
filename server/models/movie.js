'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Movie extends Model {}
  Movie.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "title must be filled"},
        notEmpty: {msg: "title must be filled"}
      }, allowNull: false
    },
    year: {
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "year must be filled"},
        notEmpty: {msg: "year must be filled"}
      }, allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {args: [["series", "movies"]], msg:"type invalid"}
      }
    },
    poster: {
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "poster must be filled"},
        notEmpty: {msg: "poster must be filled"}
      }, allowNull: false
    },
    imdbID: {
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "imdbId must be filled"},
        notEmpty: {msg: "imdbId must be filled"}
      }, allowNull: false
    }
  }, {sequelize})
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Rate)
  };
  return Movie;
};