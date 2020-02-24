'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Movie extends Model { }
  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    imdbID: DataTypes.STRING,
    type: DataTypes.STRING,
    poster: DataTypes.STRING
  }, { sequelize })

  // const Movie = sequelize.define('Movie', {
  //   title: DataTypes.STRING,
  //   year: DataTypes.STRING,
  //   imdbID: DataTypes.STRING,
  //   type: DataTypes.STRING,
  //   poster: DataTypes.STRING
  // }, {});
  Movie.associate = function (models) {
    // associations can be defined here
    Movie.hasMany(models.Rate)
  };
  return Movie;
};