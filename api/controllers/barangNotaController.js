// controllers/barangNotaController.js

const path = require('path');
const basename = path.basename(__filename);
const { mainModel } = require('../common/models');
const BarangNota = new mainModel('BarangNota');

// Get all BarangNota
exports.getAllBarangNota = async (req, res) => {
  try {
    const barangNota = await BarangNota.getAll();
    res.send({
      message: 'BarangNota sent successfully',
      data: barangNota,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (all) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get one BarangNota
exports.getOneBarangNota = async (req, res) => {
  const { KodeNota, KodeBarang } = req.params;
  try {
    const barangNota = await BarangNota.get({ KodeNota, KodeBarang });
    if (!barangNota) {
      res.status(404).json({ error: 'BarangNota not found' });
      return;
    }
    res.send({
      message: 'BarangNota sent successfully',
      data: barangNota,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (one) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create BarangNota
exports.createBarangNota = async (req, res) => {
  const data = req.body; // Assuming request body contains necessary data
  try {
    const newBarangNota = await BarangNota.post(data);
    res.send({
      message: 'BarangNota created successfully',
      data: newBarangNota,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[32m' + 'POST ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update BarangNota
exports.updateBarangNota = async (req, res) => {
  const { KodeNota, KodeBarang } = req.params;
  const data = req.body; // Assuming request body contains necessary data
  try {
    const updatedBarangNota = await BarangNota.patch(data, { KodeNota, KodeBarang });
    if (updatedBarangNota[0] === 0) {
      res.status(404).json({ error: 'BarangNota not found' });
      return;
    }
    res.send({
      message: 'BarangNota updated successfully',
      data: updatedBarangNota,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[33m' + 'PATCH ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete BarangNota
exports.deleteBarangNota = async (req, res) => {
  const { KodeNota, KodeBarang } = req.params;
  try {
    const deletedBarangNota = await BarangNota.delete({ KodeNota, KodeBarang });
    if (deletedBarangNota === 0) {
      res.status(404).json({ error: 'BarangNota not found' });
      return;
    }
    res.send({
      message: 'BarangNota deleted successfully',
      data: deletedBarangNota,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[31m' + 'DELETE ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
