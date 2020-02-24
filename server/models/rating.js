'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Rating extends Model { }
  Rating.init({
    reviewer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: [true, "foo is required"],
        notEmpty: [true, "foo is required"]
      },
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
        notNull: [true, "foo is required"],
        notEmpty: [true, "foo is required"]
      },
    },
    MovieId: DataTypes.INTEGER
  }, {
    sequelize
  });
  Rating.associate = function (models) {
    // associations can be defined here
    Rating.belongsTo(models.Movie)
  };
  return Rating;
};