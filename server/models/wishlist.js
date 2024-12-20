const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            imageUrl: { type: String, 
                //required: true
             },
        },
    ],
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
