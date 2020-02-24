'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Movie extends Model { }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: [true, "foo is required"],
        notEmpty: [true, "foo is required"]
      },
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: [true, "foo is required"],
        notEmpty: [true, "foo is required"]
      },
    },
    imdbID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: [true, "foo is required"],
        notEmpty: [true, "foo is required"]
      },
    },
    type: {
      type: DataTypes.ENUM('movie', 'series'),
      allowNull: false,
      validate: {
        notNull: [true, "foo is required"],
        notEmpty: [true, "foo is required"]
      },
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: [true, "foo is required"],
        notEmpty: [true, "foo is required"]
      },
    }
  }, {
    sequelize
  });
  Movie.associate = function (models) {
    // associations can be defined here
    Movie.hasMany(models.Rating)
  };
  return Movie;
};