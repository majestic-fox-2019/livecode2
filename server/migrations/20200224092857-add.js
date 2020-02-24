'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Ratings', "FilmId", Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('Ratings', 'FilmId');
  }
};
