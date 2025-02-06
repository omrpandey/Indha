import React, { useEffect, useState } from "react";
import axios from "axios";


export const OrderDetails = ({ firstName }) => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userResponse = await axios.get(`/user/${firstName}/total-orders`);
        if (!userResponse.data) {
          console.error("User not found");
          return;
        }
        setUser(userResponse.data);

        const ordersResponse = await axios.get(`/orders/user/${firstName}`);
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [firstName]);

  return (
    <div className="order-container"> 
      <h2>User Order Details</h2>
      {user && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number of Orders</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Order Date</th>
              <th>Total Amount</th>
              <th>Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{`${order.firstName} ${order.lastName}`}</td>
                <td>{orders.length}</td>
                <td>
                  {`${order.address.country}, ${order.address.street}, ${order.address.town}, ${order.address.state}, ${order.address.pincode}`}
                </td>
                <td>{order.phoneNumber}</td>
                <td>{order.email}</td>
                <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                <td>${order.totalPrice}</td>
                <td>{new Date(order.deliveryDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderDetails;
