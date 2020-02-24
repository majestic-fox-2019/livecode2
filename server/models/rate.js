'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Rate extends Model { }

  Rate.init({
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input point"
        },
        notEmpty: {
          msg: "Please input point"
        },
        min: {
          args: [0],
          msg: "Values allowed between 0 - 100"
        },
        max: {
          args: 100,
          msg: "Values allowed between 0 - 100"
        }
      }
    },
    reviewer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input reviewer name"
        },
        notEmpty: {
          msg: "Please input reviewer name"
        }
      }
    },
    MovieId: DataTypes.INTEGER
  }, { sequelize })

  Rate.associate = function (models) {
    // associations can be defined here
    Rate.belongsTo(models.Movie)
  };
  return Rate;
};