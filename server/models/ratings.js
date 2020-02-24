'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Ratings extends Model {
    
  }

  Ratings.init({
    point: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull: {
          args : true,
          msg : 'Reviewer name cant be empty'
        },
        isNumeric : {
          args: true,
          msg : 'Please input numbers'
        },
        min : {
          args : -1,
          msg : 'Ratings cant be lower than 0'
        },
        max : {
          args : 100,
          msg : 'Ratings cant be higher than 100'
        }
      }
    },
    reviewer: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull: {
          args : true,
          msg : 'Reviewer name cant be empty'
        }
      }
    },
    MoviesId : DataTypes.INTEGER
  }, {sequelize});
  Ratings.associate = function(models) {
    Ratings.belongsTo(models.Movies, { foreignKey: 'MoviesId', foreignKeyConstraint: true })
  };
  return Ratings;
};