"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Movie extends Model {}
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {}
      },
      year: {
        type: DataTypes.INTEGER,
        alowNull: false,
        validate: {}
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {}
      },
      poster: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {}
      },
      imdbID: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {}
      }
    },
    { sequelize }
  );
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};
