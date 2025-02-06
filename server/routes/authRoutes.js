const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/signin'); // Path to your User model
const router = express.Router();

// User Registration Route
router.post('/user/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      return res.status(400).json({ error: "Username or email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});



const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret");
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid or expired token.' });
  }
};


router.get('/user/profile', authenticateToken, async (req, res) => {
  try {
    console.log("User ID from token:", req.user.userId); // Log the user ID extracted from the token

    const userId = req.user.userId;
    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    console.log("User data:", user);  // Log the user data retrieved from the database
    res.json(user); // Send user data as response
  } catch (error) {
    console.error('Error fetching user data:', error);  // More detailed error logging
    res.status(500).json({ error: 'Server error.' });
  }
});


// User Login Route
router.post('/user/login', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    
    const user = await User.findOne({
      $or: [{ username }, { email }]  
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "your_jwt_secret", { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.put('/user/update', authenticateToken, async (req, res) => {
  const { username, email, password } = req.body;
  const userId = req.user.userId;

  try {
    
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    
    if (username) user.username = username;
    if (email) user.email = email;
    if (password) {
     
      user.password = await bcrypt.hash(password, 10);
    }

    
    await user.save();
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/users/logins', async (req, res) => {
  try {
    const users = await User.find().select('username email'); // Fetch only username & email
    res.json(users);
  } catch (error) {
    console.error('Error fetching user login details:', error);
    res.status(500).json({ error: 'Server error' });
  }
});



router.delete('/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
