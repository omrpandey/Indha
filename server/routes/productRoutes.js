const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Fetch all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products', details: error.message });
    }
});

// Add a new product
router.post('/', async (req, res) => {
    const { name, description, price, discountedPrice, images, category } = req.body;

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
        res.status(500).json({ error: 'Error adding product', details: error.message });
    }
});

module.exports = router;
