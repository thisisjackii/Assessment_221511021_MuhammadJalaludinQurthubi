// routes/tenanRoutes.js

const express = require('express');
const router = express.Router();
const tenanController = require('../controllers/tenanController');

// Get all Tenan
router.get('/', tenanController.getAllTenan);

// Get one Tenan
router.get('/:KodeTenan', tenanController.getOneTenan);

// Create Tenan
router.post('/', tenanController.createTenan);

// Update Tenan
router.patch('/:KodeTenan', tenanController.updateTenan);

// Delete Tenan
router.delete('/:KodeTenan', tenanController.deleteTenan);

module.exports = router;
