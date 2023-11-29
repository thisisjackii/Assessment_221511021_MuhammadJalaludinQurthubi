'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BarangNota extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  BarangNota.init(
    {
      JumlahBarang: DataTypes.INTEGER,
      HargaSatuan: DataTypes.DECIMAL(10, 2),
      Jumlah: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: 'BarangNota',
      freezeTableName: true,
    }
  );
  BarangNota.removeAttribute('id')

  return BarangNota;
};
