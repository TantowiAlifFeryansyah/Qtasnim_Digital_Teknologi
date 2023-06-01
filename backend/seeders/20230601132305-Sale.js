'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require('../data/tabel_sales.json')
    data.forEach(element => {
      element.createdAt = new Date();
      element.updatedAt = new Date();
    });
    await queryInterface.bulkInsert('Sales', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sales', null, {});
  }
};
