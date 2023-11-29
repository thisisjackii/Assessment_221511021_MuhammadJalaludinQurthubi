// routes/notaRoutes.js

const express = require('express');
const router = express.Router();
const notaController = require('../controllers/notaController');

// Get all Nota
router.get('/', notaController.getAllNota);

// Get one Nota
router.get('/:KodeNota', notaController.getOneNota);

// Create Nota
router.post('/', notaController.createNota);

// Update Nota
router.patch('/:KodeNota', notaController.updateNota);

// Delete Nota
router.delete('/:KodeNota', notaController.deleteNota);

module.exports = router;
