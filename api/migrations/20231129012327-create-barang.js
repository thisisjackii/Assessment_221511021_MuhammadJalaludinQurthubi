'use strict';
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Barang', {
      KodeBarang: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING
      },
      NamaBarang: {
        type: DataTypes.STRING
      },
      Satuan: {
        type: DataTypes.STRING
      },
      HargaSatuan: {
        type: DataTypes.DECIMAL(10,2)
      },
      Stok: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Barang');
  }
};
