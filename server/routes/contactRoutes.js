// routes/contactRoutes.js
const express = require('express');
const Contact = require('../models/Contact'); // Import your Contact model

const router = express.Router();

router.post('/submit', async (req, res) => {
  const { name, email, priority, department, telephone, subject, comment } = req.body;

  try {
    
    const newContact = new Contact({
      name,
      email,
      priority,
      department,
      telephone,
      subject,
      comment,
    });

   
    await newContact.save();

    
    res.status(201).json({ message: 'Contact form submitted successfully.' });
  } catch (err) {
    // Handle validation errors or other issues
    console.error(err);
    res.status(400).json({ error: 'Error submitting contact form', details: err });
  }
});

router.delete('/contacts/:id', async (req, res) => {
  try {
    const contactId = req.params.id;

    // Find and delete the contact
    const deletedContact = await Contact.findByIdAndDelete(contactId);

    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    console.error('Error deleting contact:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
