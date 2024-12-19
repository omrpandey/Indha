const express = require('express');
const multer = require('multer');
const path = require('path');
const Product = require('../models/product');
const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// Fetch a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error.message);
    res.status(500).json({ error: 'Error fetching product' });
  }
});

// Add a new product
router.post('/', upload.array('images'), async (req, res) => {
  const { name, description, price, discountedPrice, category } = req.body;
  const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

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
    console.error("Error adding product:", error.message);
    res.status(500).json({ error: 'Error adding product' });
  }
});

module.exports = router;
