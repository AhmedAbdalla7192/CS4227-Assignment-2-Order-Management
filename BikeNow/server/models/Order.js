const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    customerName: String,
    product: String,
    quantity: Number,
    status: { type: String, enum: ["Pending", "Shipped", "Delivered"], default: "Pending" } // Cancelled not here because u just remove the order.
});

module.exports = mongoose.model("Order", OrderSchema);