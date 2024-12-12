const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Route to add a new product
router.post('/product', async (req, res) => {
    const { name, description, price, discountedPrice, discountPercentage, images, tags, rating, category } = req.body;

    try {
        const product = new Product({
            name,
            description,
            price,
            discountedPrice,
            discountPercentage,
            images,
            tags,
            rating,
            category,
        });

        await product.save();
        res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ error: 'Error adding product', details: error.message });
    }
});

// Route to fetch all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products', details: error.message });
    }
});

// Route to fetch a single product by ID
router.get('/product/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching product', details: error.message });
    }
});

// Route to update a product by ID
router.put('/product/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const product = await Product.findByIdAndUpdate(id, updatedData, { new: true });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(500).json({ error: 'Error updating product', details: error.message });
    }
});

// Route to delete a product by ID
router.delete('/product/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting product', details: error.message });
    }
});

module.exports = router;
