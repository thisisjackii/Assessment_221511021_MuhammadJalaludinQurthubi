// routes/barangNotaRoutes.js

const express = require('express');
const router = express.Router();
const barangNotaController = require('../controllers/barangNotaController');

// Get all BarangNota
router.get('/', barangNotaController.getAllBarangNota);

// Get one BarangNota
router.get('/:KodeNota/:KodeBarang', barangNotaController.getOneBarangNota);

// Create BarangNota
router.post('/', barangNotaController.createBarangNota);

// Update BarangNota
router.patch('/:KodeNota/:KodeBarang', barangNotaController.updateBarangNota);

// Delete BarangNota
router.delete('/:KodeNota/:KodeBarang', barangNotaController.deleteBarangNota);

module.exports = router;
