'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Ratings', 'MovieId', { type: Sequelize.INTEGER });
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn('Ratings', 'MovieId', { type: Sequelize.INTEGER });
  }
};
