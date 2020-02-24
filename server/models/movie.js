'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize;
  class Movie extends Model{}

  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    type: DataTypes.STRING,
    poster: DataTypes.STRING,
    imdbID: DataTypes.STRING
  }, {
    sequelize
  })

  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Rate);
  };
  return Movie;
};