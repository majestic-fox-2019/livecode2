'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Rating extends Model { }
  Rating.init({
    name: DataTypes.STRING,
    score: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {
    sequelize
  });
  Rating.associate = function (models) {
    // associations can be defined here
  };
  return Rating;
};