const express = require("express");
const { getOrders, createOrder, deleteOrder, updateOrderStatus } = require("../controllers/OrderController");
const router = express.Router();

router.get("/", getOrders); // Fetch all orders
router.post("/", createOrder); // Create a new order
router.delete("/:id", deleteOrder); // Delete an order
router.put("/:id/status", updateOrderStatus); // Update order status

module.exports = router;
