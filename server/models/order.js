const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  country: { type: String },
  street: { type: String },
  town: { type: String },
  state: { type: String },
  pincode: { type: String },
  phoneNo: { type: String },
  email: { type: String },
  products: [
    { 
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true }
    }
  ],
  orderDate: { type: Date, default: Date.now }, // Automatically sets today's date
});

module.exports = mongoose.model("Order", orderSchema); // Ensure capitalization
