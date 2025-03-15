import { useState } from "react";

const OrderForm = ({ onOrderCreated }) => {
    const [formData, setFormData] = useState({ customerName: "", product: "", quantity: 1 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onOrderCreated(formData);
        setFormData({ customerName: "", product: "", quantity: 1 }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Order</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    required
                    className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                />
                <input
                    type="text"
                    placeholder="Product"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    required
                    className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                    required
                    min="1"
                    className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">➕ Add Order</button>
            </div>
        </form>
    );
};

export default OrderForm;
