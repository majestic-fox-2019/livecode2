'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize

  class Rate extends Model {}

  Rate.init({
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Point is empty'
        },
        notNull: {
          args: true,
          msg: 'Point must be filled'
        },
        isLowerThanNull(value) {
          if (value < 0){
            throw new Error("Point can't lower than 0")
          } else if (value > 100) {
            throw new Error("Point can't higher than 100")
          }
        }
      }
    },
    reviewer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Reviewer is empty'
        },
        notNull: {
          args: true,
          msg: 'Reviewer must be filled'
        }
      }
    },
    MovieId: {
      type: DataTypes.INTEGER,
    }
  }, {sequelize});
  Rate.associate = function(models) {
    Rate.belongsTo(models.Movie)
  };
  return Rate;
};