// seeders/20231129151000-kasir.js

'use strict';
/** @type {import('sequelize-cli').Migration} */
const placeholders = require('../common/seed-placeholders.json');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const NIM = placeholders.nim
    const NamaDiri = placeholders.namaDiri
    await queryInterface.bulkInsert('Kasir', [
      {
        KodeKasir: `KS${NIM}01`,
        Nama: `Ani ${NamaDiri}`,
        HP: `08${NIM}375`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeKasir: `KS${NIM}02`,
        Nama: `Budi ${NamaDiri}`,
        HP: `08${NIM}735`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more data if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Kasir', null, {});
  },
};
