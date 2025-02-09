const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); 
const productRoutes = require('./routes/productRoutes'); // Product routes
const authRoutes = require('./routes/authRoutes'); 
const contactRoutes = require('./routes/contactRoutes');
const cartRoutes = require('./routes/cart'); 
const adminAuthRoutes = require('./routes/adminAuthRoutes');
const wishlistRoutes=require('./routes/wishlist');
const addressRoutes = require('./routes/addressRoutes');
const nodemailer = require("nodemailer");
const orderRoutes = require('./routes/ordered');
dotenv.config();
const User = require("./models/signin");
 
const app = express();
const PORT = process.env.PORT || 2000;

// Middleware
app.use(cors());
app.use(express.json());


// Welcome endpoint
app.get('/api', (req, res) => {
  res.send("Welcome to the API!");
});


// API Routes
app.use('/api/products', productRoutes); // Product API
app.use('/api/', cartRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api', authRoutes);
app.use('/api', adminAuthRoutes);
app.use('/api',wishlistRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/addresses', addressRoutes);
app.use('/api/orders', orderRoutes);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
  },
});
app.post("/send-mails", async (req, res) => {
  const { subject, body } = req.body;

  try {
    const users = await User.find();
    if (!users.length) return res.json({ success: false, message: "No users found." });

    let successCount = 0, failureCount = 0;

    // Function to resolve nested keys like {user.username}
    const resolvePlaceholder = (user, keyPath) => {
      return keyPath.split('.').reduce((obj, key) => obj?.[key], user) || "";
    };

    for (const user of users) {
      // Replace placeholders like {user.username} with actual values from MongoDB
      let personalizedBody = body.replace(/\{(.*?)\}/g, (_, keyPath) => resolvePlaceholder(user, keyPath));
      let personalizedSubject = subject.replace(/\{(.*?)\}/g, (_, keyPath) => resolvePlaceholder(user, keyPath));

      try {
        await transporter.sendMail({
          from: process.env.EMAIL,
          to: user.email,
          subject: personalizedSubject,
          html: personalizedBody,
        });
        successCount++;
      } catch (error) {
        failureCount++;
      }
    }

    res.json({ success: true, successCount, failureCount });
  } catch (error) {
    res.json({ success: false, message: "Error fetching users." });
  }
});


//generate QR code for UPI payment
app.post("/generate-upi", (req, res) => {
  const { amount} = req.body;
  const upi_id = "omrajkumarpandeystandard10th@okhdfcbank"; // Replace with your UPI ID
  const recipient_name = "Ompandey"; // Replace with the recipient's name
  if (!amount || !recipient_name) {
      return res.status(400).json({ error: "Missing required fields" });
  }

  // Encode UPI payment link
  const upiLink = `upi://pay?pa=${encodeURIComponent(upi_id)}&pn=${encodeURIComponent(recipient_name)}&am=${encodeURIComponent(amount)}&cu=INR`;

  res.json({ upiLink });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || "mongodb+srv://ompandeyit69:ecCcVXpCZNwADj5m@cluster0.bhvni.mongodb.net/", {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
