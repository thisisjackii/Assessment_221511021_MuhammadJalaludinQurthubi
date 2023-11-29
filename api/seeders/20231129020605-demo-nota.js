// seeders/20231129153000-nota.js

'use strict';
/** @type {import('sequelize-cli').Migration} */
const placeholders = require('../common/seed-placeholders.json');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const NIM = placeholders.nim
    await queryInterface.bulkInsert('Nota', [
      {
        KodeNota: `NO${NIM}01`,
        KodeTenan: `TK${NIM}01`,
        KodeKasir: `KS${NIM}01`,
        TglNota: '2023-11-27',
        JamNota: '00:00:00',
        JumlahBelanja: 100000,
        Diskon: 2,
        Total: 98000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeNota: `NO${NIM}02`,
        KodeTenan: `TK${NIM}01`,
        KodeKasir: `KS${NIM}01`,
        TglNota: '2023-11-28',
        JamNota: '00:00:00',
        JumlahBelanja: 50000,
        Diskon: 1,
        Total: 49500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more data if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Nota', null, {});
  },
};
