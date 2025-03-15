import OrderItem from "./OrderItem";

const OrderList = ({ orders, onDelete, onUpdateStatus }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order List</h2>
            <ul className="divide-y divide-gray-200">
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
                    <p className="text-gray-500">No orders found.</p>
                )}
            </ul>
        </div>
    );
};

export default OrderList;
