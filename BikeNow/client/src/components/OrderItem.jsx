const OrderItem = ({ order, onDelete, onUpdateStatus }) => {
    return (
        <li>
            {order.customerName} ordered {order.quantity} {order.product} - 
            Status: {order.status}
            <button onClick={() => onDelete(order._id)}>❌ Delete</button>
            <button onClick={() => onUpdateStatus(order._id, "Shipped")}>🚚 Ship</button>
            <button onClick={() => onUpdateStatus(order._id, "Delivered")}>✅ Deliver</button>
        </li>
    );
};

export default OrderItem;
