'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    name: DataTypes.STRING,
    ratings: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};