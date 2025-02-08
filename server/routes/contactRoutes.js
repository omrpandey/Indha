const express = require('express');
const leoProfanity = require('leo-profanity');
const Contact = require('../models/Contact');

const router = express.Router();

// Properly initialize the profanity filter
leoProfanity.clearList(); // Clear existing words
leoProfanity.add(leoProfanity.getDictionary('en')); // Load English dictionary

router.post('/submit', async (req, res) => {
  const { name, email, priority, department, telephone, subject, comment } = req.body;

  try {
    console.log("Profanity Check:", leoProfanity.check(comment)); // Debugging
    console.log("Profane Words in Comment:", leoProfanity.list()); // List all detected words

    // Check for profanity
    if (leoProfanity.check(comment)) {
      return res.status(400).json({ error: 'Your comment contains inappropriate words.' });
    }

    // Optional: Clean the comment before saving
    const cleanedComment = leoProfanity.clean(comment);

    const newContact = new Contact({
      name,
      email,
      priority,
      department,
      telephone,
      subject,
      comment: cleanedComment, // Save the cleaned comment
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error submitting contact form', details: err });
  }
});

module.exports = router;
