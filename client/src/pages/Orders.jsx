import { useEffect, useState } from "react";
import { fetchOrders, createOrder, deleteOrder, updateOrderStatus } from "../services/OrderService";
import OrderList from "../components/OrderList";
import OrderForm from "../components/OrderForm";

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        const data = await fetchOrders();
        setOrders(data);
    };

    const handleOrderCreated = async (order) => {
        await createOrder(order);
        loadOrders();
    };

    const handleDelete = async (id) => {
        await deleteOrder(id);
        loadOrders();
    };

    const handleStatusUpdate = async (id, newStatus) => {
        await updateOrderStatus(id, newStatus);
        loadOrders();
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-white-800 mb-4">Order Management</h1>
            <OrderList orders={orders} onDelete={handleDelete} onUpdateStatus={handleStatusUpdate} />
            <OrderForm onOrderCreated={handleOrderCreated} />
        </div>
    );
}

export default Orders;
