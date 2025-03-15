import OrderItem from "./OrderItem";

const OrderList = ({ orders, onDelete, onUpdateStatus }) => {
    return (
        <ul>
            {orders.length > 0 ? (
                orders.map(order => (
                    <OrderItem 
                        key={order._id} 
                        order={order} 
                        onDelete={onDelete} 
                        onUpdateStatus={onUpdateStatus} 
                    />
                ))
            ) : (
                <p>No orders found.</p>
            )}
        </ul>
    );
};

export default OrderList;
