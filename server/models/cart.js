const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            discount: { type: Number },
            description: { type: String },
            quantity: { type: Number, default: 1 },
            imageUrl: { type: String } // Add this line to include the image URL
        }
    ]
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;