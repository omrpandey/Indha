const express = require("express");
const router = express.Router();
const Order = require("../models/order");

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

module.exports = router;
