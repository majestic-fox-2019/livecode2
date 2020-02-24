'use strict';
const datas = require('../seeding')
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
          return queryInterface.bulkInsert('Movies', [{
          name: 'John Doe',
          isBetaMember: false
        }], {});
      */
        return queryInterface.bulkInsert('Movies', datas, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Movies', null, {});
  }
};
