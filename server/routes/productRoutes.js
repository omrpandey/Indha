const express = require('express');
const multer = require('multer');
const path = require('path');
const Product = require('../models/product');
const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Set file name to prevent overwriting
  }
});

const upload = multer({ storage: storage });

// Add a new product (with images)
router.post('/', upload.array('images'), async (req, res) => { // 'images' is the field name from the form
  console.log(req.body);  // Product details
  console.log(req.files); // Uploaded files

  const { name, description, price, discountedPrice, category } = req.body;
  const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : []; // Save image paths

  try {
    const product = new Product({
      name,
      description,
      price,
      discountedPrice,
      images,
      category,
    });

    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    console.error("Error in POST /api/products:", error.message);
    res.status(500).json({ error: 'Error adding product', details: error.message });
  }
});

module.exports = router;
