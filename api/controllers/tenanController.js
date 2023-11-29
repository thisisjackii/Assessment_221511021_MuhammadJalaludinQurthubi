// controllers/tenanController.js

const path = require('path');
const basename = path.basename(__filename);
const { mainModel } = require('../common/models');
const Tenan = new mainModel('Tenan');

// Get all Tenan
exports.getAllTenan = async (req, res) => {
  try {
    const tenan = await Tenan.getAll();
    res.send({
      message: 'Tenan sent successfully',
      data: tenan,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (all) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get one Tenan
exports.getOneTenan = async (req, res) => {
  const { KodeTenan } = req.params;
  try {
    const tenan = await Tenan.get({ KodeTenan });
    if (!tenan) {
      res.status(404).json({ error: 'Tenan not found' });
      return;
    }
    res.send({
      message: 'Tenan sent successfully',
      data: tenan,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (one) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create Tenan
exports.createTenan = async (req, res) => {
  const data = req.body; // Assuming request body contains necessary data
  try {
    const newTenan = await Tenan.post(data);
    res.send({
      message: 'Tenan created successfully',
      data: newTenan,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[32m' + 'POST ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Tenan
exports.updateTenan = async (req, res) => {
  const { KodeTenan } = req.params;
  const data = req.body; // Assuming request body contains necessary data
  try {
    const updatedTenan = await Tenan.patch(data, { KodeTenan });
    if (updatedTenan[0] === 0) {
      res.status(404).json({ error: 'Tenan not found' });
      return;
    }
    res.send({
      message: 'Tenan updated successfully',
      data: updatedTenan,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[33m' + 'PATCH ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Tenan
exports.deleteTenan = async (req, res) => {
  const { KodeTenan } = req.params;
  try {
    const deletedTenan = await Tenan.delete({ KodeTenan });
    if (deletedTenan === 0) {
      res.status(404).json({ error: 'Tenan not found' });
      return;
    }
    res.send({
      message: 'Tenan deleted successfully',
      data: deletedTenan,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[31m' + 'DELETE ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
