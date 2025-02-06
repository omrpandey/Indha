const mongoose = require('mongoose');

const signinSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Optional: You can add a reference to the address directly (if multiple addresses are needed)
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',  // Reference to the Address schema
  },
});

module.exports = mongoose.model('User', signinSchema);
