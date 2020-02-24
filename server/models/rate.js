'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Rate extends Model { }

  Rate.init({
    reviewer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Missing input for reviewer!'
        },
        notEmpty: {
          args: true,
          msg: 'Missing input for reviewer!'
        }
      }
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: {
          args: 100,
          msg: 'Maximum input is 100!'
        },
        notNull: {
          args: true,
          msg: 'Missing input for point!'
        },
        notEmpty: {
          args: true,
          msg: 'Missing input for point!'
        }
      }
    },
    MovieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Missing input for Movie Id!'
        },
        notEmpty: {
          args: true,
          msg: 'Missing input for Movie Id!'
        }
      }
    }
  }, { sequelize })

  Rate.associate = function (models) {
    // associations can be defined here
    Rate.belongsTo(models.Movie)
  };
  return Rate;
};