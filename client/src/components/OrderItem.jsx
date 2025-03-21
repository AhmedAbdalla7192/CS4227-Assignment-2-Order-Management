const OrderItem = ({ order, onDelete, onUpdateStatus }) => {
    // Determine the badge color based on order status
    const statusColors = {
        Pending: "bg-yellow-500 text-gray-900",
        Shipped: "bg-orange-500 text-gray-900",
        Delivered: "bg-green-500 text-white",
    };

    return (
        <li className="flex justify-between items-center py-4 border-b border-gray-700">
            <div>
                <span className="text-base font-medium text-white">{order.customerName}</span> ordered
                <span className="text-blue-400"> {order.quantity} {order.product}</span>
                
                {/* Apply dynamic color class based on order.status */}
                <span className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold ${statusColors[order.status]}`}>
                    {order.status}
                </span>
            </div>
            <div className="space-x-2">
                <button onClick={() => onUpdateStatus(order._id, "Shipped")}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500 transition">🚚 Ship</button>
                <button onClick={() => onUpdateStatus(order._id, "Delivered")}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500 transition">✅ Deliver</button>
                <button onClick={() => onDelete(order._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 transition">❌ Delete</button>
            </div>
        </li>
    );
};

export default OrderItem;
