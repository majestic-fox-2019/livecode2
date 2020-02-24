'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Movie extends Model { }
  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    imdbID: DataTypes.STRING,
    type: DataTypes.STRING,
    poster: DataTypes.STRING
  }, { sequelize })

  Movie.associate = function (models) {
    Movie.hasMany(models.Rating)
  };
  return Movie;
};