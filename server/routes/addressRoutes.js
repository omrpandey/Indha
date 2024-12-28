// routes/addressRoutes.js
const express = require('express');
const Address = require('../models/Address');
const router = express.Router();

// Route to create a new address
router.post('/', async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save();
    res.status(201).json({ message: 'Address created successfully', address });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all addresses
router.get('/', async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update an address
router.put('/:id', async (req, res) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAddress) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.status(200).json({ message: 'Address updated successfully', updatedAddress });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
