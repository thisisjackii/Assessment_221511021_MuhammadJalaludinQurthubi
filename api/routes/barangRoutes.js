// routes/barangRoutes.js

const express = require('express');
const router = express.Router();
const barangController = require('../controllers/barangController');

// Get all Barang
router.get('/', barangController.getAllBarang);

// Get one Barang
router.get('/:KodeBarang', barangController.getOneBarang);

// Create Barang
router.post('/', barangController.createBarang);

// Update Barang
router.patch('/:KodeBarang', barangController.updateBarang);

// Delete Barang
router.delete('/:KodeBarang', barangController.deleteBarang);

module.exports = router;
