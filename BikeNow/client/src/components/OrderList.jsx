import OrderItem from "./OrderItem";

const OrderList = ({ orders, onDelete, onUpdateStatus }) => {
    return (
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-white">
            <h2 className="text-2xl font-semibold mb-4">Order List</h2>
            <ul className="divide-y divide-gray-700">
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
                    <p className="text-gray-400">No orders found.</p>
                )}
            </ul>
        </div>
    );
};

export default OrderList;
