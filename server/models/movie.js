'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model= sequelize.Sequelize.Model

  class Movie extends Model {}
  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    type: DataTypes.STRING,
    poster: DataTypes.STRING,
    imdbID: DataTypes.STRING
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};