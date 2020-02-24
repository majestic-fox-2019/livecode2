'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    type: DataTypes.STRING,
    poster: DataTypes.STRING,
    imdbID: DataTypes.STRING
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Rate);
  };
  return Movie;
};