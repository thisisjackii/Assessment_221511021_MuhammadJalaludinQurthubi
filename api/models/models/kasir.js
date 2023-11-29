'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Kasir extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Kasir.init(
    {
      KodeKasir: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING
      },
      Nama: DataTypes.STRING,
      HP: DataTypes.STRING(15),
    },
    {
      sequelize,
      modelName: 'Kasir',
      freezeTableName: true,
    }
  );
  Kasir.removeAttribute('id')

  return Kasir;
};
