'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tenan extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Tenan.init(
    {
      KodeTenan: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING
      },
      NamaTenan: DataTypes.STRING,
      HP: DataTypes.STRING(15),
    },
    {
      sequelize,
      modelName: 'Tenan',
      freezeTableName: true,
    }
  );
  Tenan.removeAttribute('id')

  return Tenan;
};
