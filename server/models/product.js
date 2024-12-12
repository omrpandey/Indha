const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Product name
    description: { type: String }, // Detailed description
    price: { type: Number, required: true }, // Original price
    discountedPrice: { type: Number }, // Discounted price (if applicable)
    discountPercentage: { type: Number }, // Discount in percentage
    images: [{ type: String }], // Array of image URLs
    tags: [{ type: String }], // Tags like "Sale" or "New Arrival"
    rating: { type: Number, default: 0 }, // Average rating
    totalReviews: { type: Number, default: 0 }, // Number of reviews
    category: { type: String }, // Product category (e.g., Kitchenware, Decor)
    createdAt: { type: Date, default: Date.now }, // Timestamp
});

module.exports = mongoose.model('Product', productSchema);
