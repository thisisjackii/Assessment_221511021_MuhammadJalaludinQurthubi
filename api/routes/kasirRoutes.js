// routes/kasirRoutes.js

const express = require('express');
const router = express.Router();
const kasirController = require('../controllers/kasirController');

// Get all Kasir
router.get('/', kasirController.getAllKasir);

// Get one Kasir
router.get('/:KodeKasir', kasirController.getOneKasir);

// Create Kasir
router.post('/', kasirController.createKasir);

// Update Kasir
router.patch('/:KodeKasir', kasirController.updateKasir);

// Delete Kasir
router.delete('/:KodeKasir', kasirController.deleteKasir);

module.exports = router;
