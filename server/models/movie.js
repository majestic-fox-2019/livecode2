"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Movie extends Model {}
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      poster: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imdbID: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { sequelize }
  );
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Rate);
  };
  return Movie;
};
