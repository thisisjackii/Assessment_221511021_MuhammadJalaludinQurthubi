// seeders/20231129154000-barangNota.js

'use strict';
/** @type {import('sequelize-cli').Migration} */
const placeholders = require('../common/seed-placeholders.json');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const NIM = placeholders.nim
    await queryInterface.bulkInsert('BarangNota', [
      {
        KodeNota: `NO${NIM}01`,
        KodeBarang: `BRG${NIM}01`,
        JumlahBarang: 10,
        HargaSatuan: 3000,
        Jumlah: 30000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeNota: `NO${NIM}01`,
        KodeBarang: `BRG${NIM}02`,
        JumlahBarang: 14,
        HargaSatuan: 5000,
        Jumlah: 70000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeNota: `NO${NIM}02`,
        KodeBarang: `BRG${NIM}01`,
        JumlahBarang: 10,
        HargaSatuan: 3000,
        Jumlah: 30000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeNota: `NO${NIM}02`,
        KodeBarang: `BRG${NIM}02`,
        JumlahBarang: 4,
        HargaSatuan: 5000,
        Jumlah: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more data if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BarangNota', null, {});
  },
};
