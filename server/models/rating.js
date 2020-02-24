'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Rating extends Model { }
  Rating.init({
    reviewer: {
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
    point: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: { msg: "rating should not be empty" },
        notNull: { msg: "rating should not be null" },
      }, allowNull: false
    }
  }, { sequelize })

  Rating.associate = function (models) {
    // associations can be defined here
    Rating.belongsTo(models.Movie)
  };
  return Rating;
};