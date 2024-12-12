const express = require('express');
const router = express.Router();
const Cart = require('../models/cart'); // Import Cart schema
const Product = require('../models/product'); // Import Product schema

// Route to add a product to the cart (no userId)
router.post('/cart/add', async (req, res) => {
    try {
        const { productId } = req.body; // Only expecting productId in the request body
        if (!productId) {
            return res.status(400).json({ error: 'Product ID is required' });
        }

        // Fetch the product details from the database
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Check if the cart exists (anonymous or session-based cart)
        let cart = await Cart.findOne({});

        if (!cart) {
            // If no cart exists, create a new one
            cart = new Cart({ products: [] });
        }

        // Check if the product is already in the cart
        const existingProductIndex = cart.products.findIndex(p => p.productId.toString() === productId);
        if (existingProductIndex >= 0) {
            // If product exists, increment quantity
            cart.products[existingProductIndex].quantity += 1;
        } else {
            // Add the product to the cart
            const productDetails = {
                productId: product._id,
                name: product.name,
                price: product.price,
                discount: product.discountedPrice, // Assuming discountedPrice exists in Product schema
                description: product.description,
                quantity: 1 // Default quantity for a new product
            };
            cart.products.push(productDetails);
        }

        // Save the cart
        await cart.save();

        // Calculate the total count for the cart
        const cartCount = cart.products.reduce((total, product) => total + product.quantity, 0);

        res.status(200).json({ message: 'Product added to cart', cart, cartCount });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

// Route to fetch cart details including the total count (no userId)
router.get('/cart', async (req, res) => {
    try {
        const cart = await Cart.findOne().populate('products.productId', 'name price description');
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        // Calculate the total count for the cart
        const cartCount = cart.products.reduce((total, product) => total + product.quantity, 0);

        res.status(200).json({ cart, cartCount });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

module.exports = router;
