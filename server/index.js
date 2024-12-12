const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contactRoutes');
const productRoutes = require('./routes/productRoutes');

const cartRoutes = require('./routes/cart');  // Ensure the path is correct


// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

// Middleware for parsing JSON
app.use(express.json());
app.use('/api', authRoutes);  // Mount the authRoutes under /api
app.use('/api', contactRoutes);
app.use('/api', cartRoutes); 
app.use('/api', productRoutes); 
   // Mount the contactRoutes under /api

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || "mongodb+srv://ompandeyit69:ecCcVXpCZNwADj5m@cluster0.bhvni.mongodb.net/inda")
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
