const express = require('express');
const bcrypt = require('bcrypt'); // For password hashing
const User = require('../models/signin');

const router = express.Router();

// Route for user signup
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save(); //save the documents
        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error signing up user' });
    }
});

// Route for user login
router.post('/login', async (req, res) => {
    const { usernameOrEmail, password } = req.body;

    try {
        // Find user by username or email
        const user = await User.findOne({
            $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in user' });
    }
});

module.exports = router;
