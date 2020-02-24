'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define('Ratings', {
    point: DataTypes.INTEGER,
    reviewer: DataTypes.STRING
  }, {});
  Ratings.associate = function(models) {
    // associations can be defined here
  };
  return Ratings;
};