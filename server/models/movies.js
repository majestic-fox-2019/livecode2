'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Movies extends Model{

  }

  Movies.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    type: DataTypes.STRING,
    poster: DataTypes.STRING,
    imdbID: DataTypes.STRING
  }, {sequelize});
  Movies.associate = function(models) {
    Movies.hasMany(models.Ratings, { foreignKey: 'MoviesId'})
  };
  return Movies;
};