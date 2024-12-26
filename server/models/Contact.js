const mongoose = require('mongoose');

// Define the schema for the contact page
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  priority: {
    type: String,
    enum: ['Low', 'High'],
    required: true,
  },
  department: {
    type: String,
    enum: ['Sales Support', 'B2B Enquiry'],
    required: true,
  },
  telephone: {
    type: String,
    required: true,
    match: [/^\d{10,15}$/, 'Please enter a valid phone number'], // Adjust the regex as per your requirements
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  comment: {
    type: String,
    required: true,
    trim: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
