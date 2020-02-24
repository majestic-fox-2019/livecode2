'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Rate extends Model {}

  Rate.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    MovieId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'Movie',
      //   key: 'id'
      // }
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: 0,
          msg: 'Minimum Point is 0'
        },
        max: {
          args: 100,
          msg: 'Maximum Point is 100'
        },
        notNull: {
          args: true,
          msg: 'Point is required'
        }
      }
    },
    reviewer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Reviewer is required'
        }
      }
    }
  }, {
    sequelize
  });
  Rate.associate = function(models) {
    // associations can be defined here
    Rate.belongsTo(models.Movie, { foreignKey: 'MovieId'})
  };
  return Rate;
};