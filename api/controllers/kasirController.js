// controllers/kasirController.js

const path = require('path');
const basename = path.basename(__filename);
const { mainModel } = require('../common/models');
const Kasir = new mainModel('Kasir');

// Get all Kasir
exports.getAllKasir = async (req, res) => {
  try {
    const kasir = await Kasir.getAll();
    res.send({
      message: 'Kasir sent successfully',
      data: kasir,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (all) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get one Kasir
exports.getOneKasir = async (req, res) => {
  const { KodeKasir } = req.params;
  try {
    const kasir = await Kasir.get({ KodeKasir });
    if (!kasir) {
      res.status(404).json({ error: 'Kasir not found' });
      return;
    }
    res.send({
      message: 'Kasir sent successfully',
      data: kasir,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (one) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create Kasir
exports.createKasir = async (req, res) => {
  const data = req.body; // Assuming request body contains necessary data
  try {
    const newKasir = await Kasir.post(data);
    res.send({
      message: 'Kasir created successfully',
      data: newKasir,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[32m' + 'POST ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Kasir
exports.updateKasir = async (req, res) => {
  const { KodeKasir } = req.params;
  const data = req.body; // Assuming request body contains necessary data
  try {
    const updatedKasir = await Kasir.patch(data, { KodeKasir });
    if (updatedKasir[0] === 0) {
      res.status(404).json({ error: 'Kasir not found' });
      return;
    }
    res.send({
      message: 'Kasir updated successfully',
      data: updatedKasir,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[33m' + 'PATCH ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Kasir
exports.deleteKasir = async (req, res) => {
  const { KodeKasir } = req.params;
  try {
    const deletedKasir = await Kasir.delete({ KodeKasir });
    if (deletedKasir === 0) {
      res.status(404).json({ error: 'Kasir not found' });
      return;
    }
    res.send({
      message: 'Kasir deleted successfully',
      data: deletedKasir,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[31m' + 'DELETE ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
