const express = require("express");
const router = express.Router();
const User = require('../models/admin'); // Import the User model
const Order = require('../models/order'); // Import the Order model


// POST route to save the order
router.post("/", async (req, res) => {
  try {
    const orderData = req.body;
    const newOrder = new Order(orderData);
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully!" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: "Failed to save the order." });
  }
});



router.get("/user/:firstName/total-orders", async (req, res) => {
  const { firstName } = req.params;

  try {
    const { firstName } = req.params;

    // Case-insensitive search for user by first name
    const user = await User.findOne({
      firstName: { $regex: new RegExp("^" + firstName, "i") }
    });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    // Find orders related to this user and count them
    const totalOrders = await Order.countDocuments({ userName: firstName });

    res.status(200).json({ totalOrders });
  } catch (error) {
    console.error("Error fetching total orders:", error);
    res.status(500).json({ error: 'Server error.' });
  }
});


module.exports = router;
