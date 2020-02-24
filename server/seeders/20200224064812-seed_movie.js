'use strict';

const seeder = require('../seeding')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', seeder)
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('People', null, {});
  }
};
