const OrderItem = ({ order, onDelete, onUpdateStatus }) => {
    return (
        <li className="flex justify-between items-center py-4">
            <div>
                <span className="text-lg font-medium text-gray-800">{order.customerName}</span> ordered 
                <span className="text-blue-600"> {order.quantity} {order.product}</span>
                <span className={`ml-2 px-3 py-1 rounded-full text-sm 
                    ${order.status === "Pending" ? "bg-yellow-200 text-yellow-800" : 
                      order.status === "Shipped" ? "bg-blue-200 text-blue-800" : 
                      "bg-green-200 text-green-800"}
                `}>
                    {order.status}
                </span>
            </div>
            <div className="space-x-2">
                <button onClick={() => onUpdateStatus(order._id, "Shipped")} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">🚚 Ship</button>
                <button onClick={() => onUpdateStatus(order._id, "Delivered")} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">✅ Deliver</button>
                <button onClick={() => onDelete(order._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">✖️ Delete</button>
            </div>
        </li>
    );
};

export default OrderItem;
