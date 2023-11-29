// seeders/20231129150000-barang.js

'use strict';
/** @type {import('sequelize-cli').Migration} */
const placeholders = require('../common/seed-placeholders.json');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const NIM = placeholders.nim
    const NamaDiri = placeholders.namaDiri
    await queryInterface.bulkInsert('Barang', [
      {
        KodeBarang: `BRG${NIM}01`,
        NamaBarang: `Indomie Rasa ${NamaDiri}`,
        Satuan: 'Bungkus',
        HargaSatuan: 3000,
        Stok: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeBarang: `BRG${NIM}02`,
        NamaBarang: `Susu Ultra ${NamaDiri}`,
        Satuan: 'Pcs',
        HargaSatuan: 5000,
        Stok: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more data if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Barang', null, {});
  },
};
