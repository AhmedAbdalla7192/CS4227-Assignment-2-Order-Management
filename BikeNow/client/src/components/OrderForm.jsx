import { useState } from "react";

const OrderForm = ({ onOrderCreated }) => {
    const [formData, setFormData] = useState({ customerName: "", product: "", quantity: 1 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onOrderCreated(formData);
        setFormData({ customerName: "", product: "", quantity: 1 }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Customer Name"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Product"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                required
                min="1"
            />
            <button type="submit">➕ Add Order</button>
        </form>
    );
};

export default OrderForm;
