'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Rating extends Model { }
  Rating.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "username should not be empty" },
        notNull: { msg: "username should not be null" }
      }, allowNull: false
    },
    MovieId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: { msg: "movieId should not be empty" },
        notNull: { msg: "movieId should not be null" }
      }, allowNull: false
    },

    movieName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "moviename should not be empty" },
        notNull: { msg: "moviename should not be null" }
      }, allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: { msg: "rating should not be empty" },
        notNull: { msg: "rating should not be null" },
        isOkay(value) {

        }
      }, allowNull: false
    }
  }, { sequelize })
  const Rating = sequelize.define('Rating', {

  }, {});
  Rating.associate = function (models) {
    // associations can be defined here
  };
  return Rating;
};