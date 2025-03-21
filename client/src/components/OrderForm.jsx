import { useState } from "react";

const OrderForm = ({ onOrderCreated }) => {
    const [formData, setFormData] = useState({ customerName: "", product: "", quantity: 1 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onOrderCreated(formData);
        setFormData({ customerName: "", product: "", quantity: 1 }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 shadow-lg rounded-lg p-6 mt-6 text-white">
            <h2 className="text-xl font-semibold mb-4">Add New Order</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    required
                    className="w-full bg-gray-700 text-white border border-gray-500 rounded-lg p-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                    type="text"
                    placeholder="Product"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    required
                    className="w-full bg-gray-700 text-white border border-gray-500 rounded-lg p-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                    required
                    min="1"
                    className="w-full bg-gray-700 text-white border border-gray-500 rounded-lg p-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition">
                    ➕ Add Order
                </button>
            </div>
        </form>
    );
};

export default OrderForm;
