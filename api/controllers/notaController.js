// controllers/notaController.js

const path = require('path');
const basename = path.basename(__filename);
const { mainModel } = require('../common/models');
const Nota = new mainModel('Nota');

// Get all Nota
exports.getAllNota = async (req, res) => {
  try {
    const nota = await Nota.getAll();
    res.send({
      message: 'Nota sent successfully',
      data: nota,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (all) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get one Nota
exports.getOneNota = async (req, res) => {
  const { KodeNota } = req.params;
  try {
    const nota = await Nota.get({ KodeNota });
    if (!nota) {
      res.status(404).json({ error: 'Nota not found' });
      return;
    }
    res.send({
      message: 'Nota sent successfully',
      data: nota,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (one) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create Nota
exports.createNota = async (req, res) => {
  const data = req.body; // Assuming request body contains necessary data
  try {
    const newNota = await Nota.post(data);
    res.send({
      message: 'Nota created successfully',
      data: newNota,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[32m' + 'POST ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Nota
exports.updateNota = async (req, res) => {
  const { KodeNota } = req.params;
  const data = req.body; // Assuming request body contains necessary data
  try {
    const updatedNota = await Nota.patch(data, { KodeNota });
    if (updatedNota[0] === 0) {
      res.status(404).json({ error: 'Nota not found' });
      return;
    }
    res.send({
      message: 'Nota updated successfully',
      data: updatedNota,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[33m' + 'PATCH ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Nota
exports.deleteNota = async (req, res) => {
  const { KodeNota } = req.params;
  try {
    const deletedNota = await Nota.delete({ KodeNota });
    if (deletedNota === 0) {
      res.status(404).json({ error: 'Nota not found' });
      return;
    }
    res.send({
      message: 'Nota deleted successfully',
      data: deletedNota,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[31m' + 'DELETE ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
