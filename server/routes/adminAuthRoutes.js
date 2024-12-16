const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin'); // Correct path to the admin model
const router = express.Router();

// Admin Register Route
router.post('/admin/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if username or email already exists
    const existingAdmin = await Admin.findOne({ $or: [{ username }, { email }] });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const newAdmin = new Admin({
      username,
      email,
      password: hashedPassword
    });

    // Save admin to database
    await newAdmin.save();
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin Login Route
router.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find admin by username
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(400).json({ error: 'Admin not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ adminId: admin._id }, "your_jwt_secret", { expiresIn: "1h" });

    res.json({ message: 'Admin login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
