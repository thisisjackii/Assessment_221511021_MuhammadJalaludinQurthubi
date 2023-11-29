'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Barang.init(
    {
      KodeBarang: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING
      },
      NamaBarang: DataTypes.STRING,
      Satuan: DataTypes.STRING,
      HargaSatuan: DataTypes.DECIMAL(10, 2),
      Stok: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Barang',
      freezeTableName: true,
    }
  );
  Barang.removeAttribute('id')

  return Barang;
};
