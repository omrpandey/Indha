const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // Make userId optional
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      price: Number,
      discount: Number,
      description: String,
      quantity: { type: Number, default: 1 },
    }
  ]
});

module.exports = mongoose.model('Cart', cartSchema);
