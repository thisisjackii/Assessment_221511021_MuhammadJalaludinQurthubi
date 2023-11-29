'use strict';
const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Nota', {
      KodeNota: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING
      },
      KodeTenan: {
        type: DataTypes.STRING,
        references: {
          model: 'Tenan',
          key: 'KodeTenan'
        }
      },
      KodeKasir: {
        type: DataTypes.STRING,
        references: {
          model: 'Kasir',
          key: 'KodeKasir'
        }
      },
      TglNota: {
        type: DataTypes.DATE
      },
      JamNota: {
        type: DataTypes.TIME
      },
      JumlahBelanja: {
        type: DataTypes.DECIMAL(10,2)
      },
      Diskon: {
        type: DataTypes.DECIMAL(5,2)
      },
      Total: {
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
    await queryInterface.dropTable('Nota');
  }
};