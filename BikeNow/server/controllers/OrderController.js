const Order = require("../models/Order");

// ✅ Fetch all orders
exports.getOrders = async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
};

// ✅ Create a new order
exports.createOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: "Failed to create order" });
    }
};

// ✅ Delete an order
exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        await Order.findByIdAndDelete(id);
        res.json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete order" });
    }
};

// ✅ Update order status
exports.updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body; // New status (Pending, Shipped, Delivered) - Deletion/Removal is technically cancelling
        const updatedOrder = await Order.findByIdAndUpdate(id, { status }, { new: true });
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: "Failed to update order status" });
    }
};
