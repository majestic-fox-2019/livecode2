'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Movie extends Model { }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "Title should not be empty" },
        notNull: { msg: "Title should not be null" }
      }, allowNull: false
    },
    year: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "year should not be empty" },
        notNull: { msg: "year should not be null" }
      }, allowNull: false
    },
    imdbID: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "imdbId should not be empty" },
        notNull: { msg: "imdbId should not be null" }
      }, allowNull: false
    },
    type: {
      type: DataTypes.ENUM(['movie', 'series']),
      validate: {
        notEmpty: { msg: "type should not be empty" },
        notNull: { msg: "type should not be null" }
      }, allowNull: false
    },
    poster: {
      type: DataTypes.STRING
    }
  }, { sequelize })

  Movie.associate = function (models) {
    // associations can be defined here
    Movie.hasMany(models.Rating)
  };
  return Movie;
};