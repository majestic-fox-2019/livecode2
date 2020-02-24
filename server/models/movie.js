'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Movie extends Model {}

  Movie.init({
    title: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.STRING,
    },
    imdbID: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    poster: {
      type: DataTypes.STRING
    }
  }, {
    sequelize
  });
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};