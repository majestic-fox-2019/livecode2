'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize

  class Rating extends Model { }

  Rating.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name Cannot Be Empty'
        },
        notNull: {
          args: true,
          msg: 'Name Cannot Be Null'
        }
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Rating Cannot Be Empty'
        },
        notNull: {
          args: true,
          msg: 'Rating Cannot Be Null'
        },
        max: {
          args: 100,
          msg: 'Cannot greater than 100'
        },
      }
    },
  }, { sequelize });


  Rating.associate = function (models) {
    Rating.belongsTo(models.Movie)
  };
  return Rating;
};