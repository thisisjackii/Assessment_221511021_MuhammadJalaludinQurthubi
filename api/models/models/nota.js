'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Nota extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Nota.init(
    {
      KodeNota: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING
      },
      TglNota: DataTypes.DATE,
      JamNota: DataTypes.TIME,
      JumlahBelanja: DataTypes.DECIMAL(10, 2),
      Diskon: DataTypes.DECIMAL(5, 2),
      Total: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: 'Nota',
      freezeTableName: true,
    }
  );
  Nota.removeAttribute('id')

  return Nota;
};
