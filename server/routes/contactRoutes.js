// routes/contactRoutes.js
const express = require('express');
const Contact = require('../models/Contact'); // Import your Contact model

const router = express.Router();

// POST route for handling the contact form submission
router.post('/submit', async (req, res) => {
  const { name, email, priority, department, telephone, subject, comment } = req.body;

  try {
    // Create a new contact document using the Contact model
    const newContact = new Contact({
      name,
      email,
      priority,
      department,
      telephone,
      subject,
      comment,
    });

    // Save the document to the database
    await newContact.save();

    // Send a success response
    res.status(201).json({ message: 'Contact form submitted successfully.' });
  } catch (err) {
    // Handle validation errors or other issues
    console.error(err);
    res.status(400).json({ error: 'Error submitting contact form', details: err });
  }
});

module.exports = router;
