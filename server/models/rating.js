'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Rating extends Model { }
  Rating.init({
    reviewer: DataTypes.STRING,
    point: DataTypes.INTEGER,
    MoviesId: DataTypes.INTEGER
  }, { sequelize })

  Rating.associate = function (models) {
    Rating.belongsTo(models.Movie)
  };
  return Rating;
};