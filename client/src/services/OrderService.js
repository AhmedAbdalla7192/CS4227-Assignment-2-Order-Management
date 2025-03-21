export const fetchOrders = async () => {
    const response = await fetch("http://localhost:5000/api/orders");
    return response.json();
};

export const createOrder = async (order) => {
    const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order)
    });
    return response.json();
};

export const deleteOrder = async (id) => {
    return fetch(`http://localhost:5000/api/orders/${id}`, { method: "DELETE" });
};

export const updateOrderStatus = async (id, status) => {
    return fetch(`http://localhost:5000/api/orders/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
    });
};
