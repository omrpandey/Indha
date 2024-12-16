const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); 
const productRoutes = require('./routes/productRoutes'); // Product routes
const authRoutes = require('./routes/authRoutes'); 
const contactRoutes = require('./routes/contactRoutes');
const cartRoutes = require('./routes/cart'); 
const adminAuthRoutes = require('./routes/adminAuthRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/products', productRoutes); // Product API
app.use('/api/cart', cartRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api', authRoutes);
app.use('/api', adminAuthRoutes);

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
