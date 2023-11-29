// controllers/barangController.js

const path = require('path');
const basename = path.basename(__filename);
const { mainModel } = require('../common/models');
const Barang = new mainModel('Barang');

// Get all Barang
exports.getAllBarang = async (req, res) => {
  try {
    const barang = await Barang.getAll();
    res.send({
      message: 'Barang sent successfully',
      data: barang,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (all) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get one Barang
exports.getOneBarang = async (req, res) => {
  const { KodeBarang } = req.params;
  try {
    const barang = await Barang.get({ KodeBarang });
    if (!barang) {
      res.status(404).json({ error: 'Barang not found' });
      return;
    }
    res.send({
      message: 'Barang sent successfully',
      data: barang,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (one) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create Barang
exports.createBarang = async (req, res) => {
  const data = req.body; // Assuming request body contains necessary data
  try {
    const newBarang = await Barang.post(data);
    res.send({
      message: 'Barang created successfully',
      data: newBarang,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[32m' + 'POST ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Barang
exports.updateBarang = async (req, res) => {
  const { KodeBarang } = req.params;
  const data = req.body; // Assuming request body contains necessary data
  try {
    const updatedBarang = await Barang.patch(data, { KodeBarang });
    if (updatedBarang[0] === 0) {
      res.status(404).json({ error: 'Barang not found' });
      return;
    }
    res.send({
      message: 'Barang updated successfully',
      data: updatedBarang,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[33m' + 'PATCH ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Barang
exports.deleteBarang = async (req, res) => {
  const { KodeBarang } = req.params;
  try {
    const deletedBarang = await Barang.delete({ KodeBarang });
    if (deletedBarang === 0) {
      res.status(404).json({ error: 'Barang not found' });
      return;
    }
    res.send({
      message: 'Barang deleted successfully',
      data: deletedBarang,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[31m' + 'DELETE ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
