import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ShoppingCart, Package, Truck, User, CreditCard } from "lucide-react";
import "./OrderDetails.css";

export const Orders = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.error("Token not found in localStorage");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/user/profile", {
          headers: { authorization: `Bearer ${token}` },
        });
        setFirstName(response.data.username || "");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);

  useEffect(() => {
    if (!firstName) return;

    const fetchOrders = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:2000/api/orders/user/${firstName}/total-orders`);
        setTotalOrders(userResponse.data.totalOrders || 0);

        const ordersResponse = await axios.get(`http://localhost:2000/api/orders/orders/user/${firstName}`);
        setOrders(ordersResponse.data || []);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [firstName]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartResponse = await axios.get("http://localhost:2000/api/cart");
        const cartData = cartResponse.data.cart?.products.map((product) => ({
          ...product,
          quantity: product.quantity || 1,
        })) || [];
        
        setCartProducts(cartData);
        const cartTotal = cartData.reduce((acc, product) => acc + product.price * product.quantity, 0);
        setTotalAmount(cartTotal);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="orders-container">
      {cartProducts.length > 0 ? (
        <div className="cart-summary">
          <h3><ShoppingCart size={24} /> Your Cart</h3>
          <div className="cart-items">
            {cartProducts.map((product, index) => (
              <div key={index} className="cart-item">
                <span>{product.name}</span>
                <span>₹{product.price} x {product.quantity}</span>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <p>Total Items: <span>{cartProducts.length}</span></p>
            <p>Total Amount: <span>₹{totalAmount}</span></p>
          </div>
          <Link to="/checkout" className="checkout-button">
            <CreditCard size={20} /> Proceed to Checkout
          </Link>
        </div>
      ) : <p className="empty-cart">Your cart is empty!</p>}

      <div className="order-container">
        <h2><Package size={24} /> User Order Details</h2>
        <p className="total-orders">Total Orders: {totalOrders}</p>

        {loading ? <p>Loading...</p> : orders.length === 0 ? (
          <p>No orders found for {firstName}.</p>
        ) : (
          <table className="order-table">
            <thead>
              <tr>
                <th><User size={16} /> Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Order Date</th>
                <th>Total Amount</th>
                <th><Truck size={16} /> Delivery Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{`${order.firstName} ${order.lastName || ""}`}</td>
                  <td>{`${order.country}, ${order.street}, ${order.town}, ${order.state}, ${order.pincode}`}</td>
                  <td>{order.phoneNo}</td>
                  <td>{order.email}</td>
                  <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                  <td>₹{order.totalAmount || "N/A"}</td>
                  <td>{new Date(new Date(order.orderDate).setDate(new Date(order.orderDate).getDate() + 7)).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  ); 
};
