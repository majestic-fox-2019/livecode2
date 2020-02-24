'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize
  class Movie extends Model{}

  Movie.init({
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'title cannot be empty'},
        notNull: {msg: 'title cannot be empty'},
      }
    },
    year:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'year cannot be empty'},
        notNull: {msg: 'year cannot be empty'},
      }
    },
    imdbID:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'imdbID cannot be empty'},
        notNull: {msg: 'imdbID cannot be empty'},
      }
    },   
    type:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'type cannot be empty'},
        notNull: {msg: 'type cannot be empty'},
      }
    },
    poster:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: ' poster cannot be empty'},
        notNull: {msg: 'poster cannot be empty'},
      }
    }
  },{sequelize})
  
  
  Movie.associate = function(models) {
    Movie.hasMany(models.Rate)
    // associations can be defined here
  };
  return Movie;
};