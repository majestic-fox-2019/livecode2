'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Rate extends Model{}
  Rate.init({
    reviewer: {
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "reviewer must be filled"},
        notEmpty: {msg: "reviewer must be filled"}
      }, allowNull: false
    },
    point: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: {msg: "point must be filled"},
        notEmpty: {msg: "point must be filled"},
        max:{args: 100, msg: "max point is 100"}
      },allowNull: false
    },
    MovieId: DataTypes.INTEGER
  }, {sequelize})
  Rate.associate = function(models) {
    // associations can be defined here
    Rate.belongsTo(models.Movie)
  };
  return Rate;
};