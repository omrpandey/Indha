const express = require('express');
const router = express.Router();
const Wishlist = require('../models/wishlist'); // Import Wishlist schema
const Product = require('../models/product');   // Import Product schema

router.post('/wishlist/add', async (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ error: 'Product ID is required' });
        }

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        let wishlist = await Wishlist.findOne({});
        if (!wishlist) {
            wishlist = new Wishlist({ products: [] });
        }

        const alreadyInWishlist = wishlist.products.some(
            (p) => p.productId.toString() === productId
        );

        if (!alreadyInWishlist) {
            wishlist.products.push({
                productId: product._id,
                name: product.name,
                price: product.price,
                imageUrl: product.images[0],
            });
        }

        await wishlist.save();

        res.status(200).json({ message: 'Product added to wishlist', wishlist });
    } catch (error) {
        console.error('Error adding product to wishlist:', error.message);
        res.status(500).json({ error: 'Something went wrong!' });
    }
});




// Get all wishlist items
router.get('/wishlist', async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne();
        if (!wishlist) {
            return res.status(404).json({ error: 'Wishlist is empty' });
        }

        res.status(200).json({ wishlist: wishlist.products });
    } catch (error) {
        console.error('Error fetching wishlist:', error.message);
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

module.exports = router;
