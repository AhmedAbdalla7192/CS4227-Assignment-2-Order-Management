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
        <div>
            <h1>Order List</h1>
            <p>Total Orders: {orders.length}</p>
            <OrderList orders={orders} onDelete={handleDelete} onUpdateStatus={handleStatusUpdate} />
            <h2>Add New Order</h2>
            <OrderForm onOrderCreated={handleOrderCreated} />
        </div>
    );
}

export default Orders;
