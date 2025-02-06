const express = require("express");
const router = express.Router();
const User = require('../models/admin'); // Import the User model
const Order = require('../models/order'); // Import the Order model
const Cart = require('../models/cart'); // Import the Cart model
router.post("/", async (req, res) => {
  try {
    let orders = req.body; // Ensure data is an array
    if (!Array.isArray(orders)) {
      orders = [orders];
    }

    // Remove `_id` from each order before inserting
    const sanitizedOrders = orders.map(({ _id, ...order }) => order);

    // Insert orders into the Order collection
    await Order.insertMany(sanitizedOrders);


    res.status(201).json({ message: "Orders saved successfully! Cart cleared." });
  } catch (error) {
    console.error("Error saving orders:", error);
    res.status(500).json({ message: "Failed to save the orders.", error: error.message });
  }
});


// Fetch user orders and total order count
router.get("/user/:firstName/total-orders", async (req, res) => {
  const { firstName } = req.params;

  try {
    const totalOrders = await Order.countDocuments({ firstName: new RegExp("^" + firstName, "i") });

    if (totalOrders === 0) {
      return res.status(404).json({ error: "No orders found for this user." });
    }

    res.status(200).json({ totalOrders });
  } catch (error) {
    console.error("Error fetching total orders:", error);
    res.status(500).json({ error: "Server error." });
  }
});

// Fetch all orders by user
router.get("/orders/user/:firstName", async (req, res) => {
  const { firstName } = req.params;

  try {
    const orders = await Order.find({ firstName: new RegExp("^" + firstName, "i") });

    if (!orders.length) {
      return res.status(404).json({ error: "No orders found." });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ error: "Server error." });
  }
});


module.exports = router;
