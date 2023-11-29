'use strict';
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BarangNota', {
      KodeNota: {
        type: DataTypes.STRING,
        references: {
          model: 'Nota',
          key: 'KodeNota'
        }
      },
      KodeBarang: {
        type: DataTypes.STRING,
        references: {
          model: 'Barang',
          key: 'KodeBarang'
        }
      },
      JumlahBarang: {
        type: DataTypes.INTEGER
      },
      HargaSatuan: {
        type: DataTypes.DECIMAL(10,2)
      },
      Jumlah: {
        type: DataTypes.DECIMAL(10,2)
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
    await queryInterface.dropTable('BarangNota');
  }
};
