const express = require('express');
const router = express.Router();
const Cart = require('../models/cart'); // Import Cart schema
const Product = require('../models/product'); // Import Product schema

// Route to add a product to the cart (no userId)
router.post('/cart/add', async (req, res) => {
    try {
        const { productId } = req.body; 
        console.log('Request Body:', req.body); // Debug log

        if (!productId) {
            return res.status(400).json({ error: 'Product ID is required' });
        }

        const product = await Product.findById(productId);
        console.log('Product Found:', product); // Debug log

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        let cart = await Cart.findOne({});
        if (!cart) {
            cart = new Cart({ products: [] });
        }

        const existingProductIndex = cart.products.findIndex(p => p.productId.toString() === productId);
        if (existingProductIndex >= 0) {
            cart.products[existingProductIndex].quantity += 1;
        } else {
            const productDetails = {
                productId: product._id,
                name: product.name,
                price: product.price,
                discount: product.discountedPrice,
                description: product.description,
                quantity: 1,
                imageUrl: product.images[0] // Add this line to include the first image
            };
            cart.products.push(productDetails);
        }

        console.log('Cart Being Saved:', cart); // Debug log

        await cart.save();

        const cartCount = cart.products.reduce((total, product) => total + product.quantity, 0);
        res.status(200).json({ message: 'Product added to cart', cart, cartCount });
    } catch (error) {
        console.error('Error Adding to Cart:', error.message); // Debug log
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

// Route to clear the cart
router.delete("/clear-cart", async (req, res) => {
    try {
        // Delete all items from the Cart collection
        await Cart.deleteMany({});

        // Send a success response
        res.status(200).json({ message: "Cart cleared successfully!" });
    } catch (error) {
        console.error("Error clearing cart:", error);
        res.status(500).json({ message: "Error clearing the cart", error: error.message });
    }
});
// Route to remove a single product from the cart
router.delete("/cart/:productId", async (req, res) => {
    try {
        const { productId } = req.params;

        let cart = await Cart.findOne();
        if (!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }

        // Remove the product from the cart
        cart.products = cart.products.filter(product => product.productId.toString() !== productId);

        await cart.save();

        // Calculate the updated cart count
        const cartCount = cart.products.reduce((total, product) => total + product.quantity, 0);

        res.status(200).json({ message: "Product removed from cart", cart, cartCount });
    } catch (error) {
        console.error("Error removing product from cart:", error);
        res.status(500).json({ error: "Something went wrong!" });
    }
});



module.exports = router;
