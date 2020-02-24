'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Movie extends Model { }
  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    imbdID: DataTypes.STRING,
    type: DataTypes.STRING,
    poster: DataTypes.STRING
  }, {
    sequelize
  });
  Movie.associate = function (models) {
    // associations can be defined here
  };
  return Movie;
};