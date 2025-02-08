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
  const { name, description, price, discountedPrice,discountPercentage, category } = req.body;
  const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

  try {
    const product = new Product({
      name,
      description,
      price,
      discountedPrice,
      discountPercentage, 
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

// Update a product by ID
router.put('/:id', upload.array('images'), async (req, res) => {
  const { name, description, price, discountedPrice, discountPercentage, category } = req.body;
  const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        discountedPrice,
        discountPercentage,
        category,
        images: images.length > 0 ? images : undefined, // Only update images if new ones are provided
      },
      { new: true } // Return updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ error: 'Error updating product' });
  }
});
// Delete a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).json({ error: 'Error deleting product' });
  }
});





module.exports = router;
