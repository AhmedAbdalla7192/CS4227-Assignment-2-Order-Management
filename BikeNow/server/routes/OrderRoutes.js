const express = require("express");
const { getOrders, createOrder, deleteOrder, updateOrderStatus } = require("../controllers/OrderController");
const { validateOrder, validateOrderStatus } = require("../utilities/OrderValidator");
const router = express.Router();

router.get("/", getOrders); // Fetch all orders
router.post("/", validateOrder, createOrder); // Create a new order with validation
router.delete("/:id", deleteOrder); // Delete an order
router.put("/:id/status", validateOrderStatus, updateOrderStatus); // Update order status with validation

module.exports = router;
