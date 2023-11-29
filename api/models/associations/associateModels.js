// associateModels.js

'use strict';

module.exports = (models) => {
  const { Barang, Kasir, Tenan, Nota, BarangNota } = models;

  // Define your bidirectional associations here
  Nota.belongsTo(Tenan, { foreignKey: 'KodeTenan', targetKey: 'KodeTenan', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Nota.belongsTo(Kasir, { foreignKey: 'KodeKasir', targetKey: 'KodeKasir', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Nota.hasMany(BarangNota, { foreignKey: 'KodeNota', targetKey: 'KodeNota', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  BarangNota.belongsTo(Nota, { foreignKey: 'KodeNota', targetKey: 'KodeNota', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  BarangNota.belongsTo(Barang, { foreignKey: 'KodeBarang', targetKey: 'KodeBarang', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  BarangNota.belongsTo(Nota, { foreignKey: 'KodeNota', targetKey: 'KodeNota', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  Kasir.hasMany(Nota, { foreignKey: 'KodeKasir', targetKey: 'KodeKasir', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Kasir.hasMany(BarangNota, { foreignKey: 'KodeKasir', targetKey: 'KodeKasir', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  Tenan.hasMany(Nota, { foreignKey: 'KodeTenan', targetKey: 'KodeTenan', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Tenan.hasMany(BarangNota, { foreignKey: 'KodeTenan', targetKey: 'KodeTenan', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  Barang.hasMany(BarangNota, { foreignKey: 'KodeBarang', targetKey: 'KodeBarang', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Barang.hasMany(Nota, { foreignKey: 'KodeBarang', targetKey: 'KodeBarang', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  // Add more bidirectional associations if needed
};
