// seeders/20231129152000-tenan.js

'use strict';
/** @type {import('sequelize-cli').Migration} */
const placeholders = require('../common/seed-placeholders.json');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const NIM = placeholders.nim
    const FirstName = placeholders.firstName
    await queryInterface.bulkInsert('Tenan', [
      {
        KodeTenan: `TK${NIM}01`, 
        NamaTenan: `${FirstName}maret`,
        HP: `08${NIM}375`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeTenan: `TK${NIM}02`,
        NamaTenan: `${FirstName}mart`,
        HP: `08${NIM}735`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more data if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tenan', null, {});
  },
};
