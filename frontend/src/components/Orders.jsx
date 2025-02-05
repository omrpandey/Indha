import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./OrderDetails.css";

export const Orders = () => {
  // Declare state variables
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalAmount2, setTotalAmount2] = useState(0);
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const token = localStorage.getItem("token");
  // Fetch user data from the API when the component mounts
  useEffect(() => {
    if (!token) {
      console.error("Token not found in localStorage");
      return;
    }

    const fetchUserData = async () => {
      try {
        console.log("Fetching user data..."); // Debugging log
        const response = await axios.get(
          "http://localhost:2000/api/user/profile",
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );

        if (response.data && response.data.username) {
          console.log("Fetched firstName:", response.data.username); // Debugging log
          setFirstName(response.data.username);
        } else {
          console.error("User data is empty or malformed:", response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);

  useEffect(() => {
    console.log("Updated firstName:", firstName); // Logs whenever firstName updates
  }, [firstName]);

  // Fetch orders from the API when the component mounts and when the firstName state changes
  useEffect(() => {
    if (!firstName) return; // Ensure firstName is available before making API calls

    const fetchOrders = async () => {
      try {
        const userResponse = await axios.get(
          `http://localhost:2000/api/orders/user/${firstName}/total-orders`
        );
        setTotalOrders(userResponse.data.totalOrders || 0);
        setTotalAmount2(userResponse.data.totalAmount || 0);
        console.log("Total Orders:", userResponse.data.totalOrders); // Debugging log

        const ordersResponse = await axios.get(
          `http://localhost:2000/api/orders/orders/user/${firstName}`
        );
        setOrders(ordersResponse.data || []);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false); // Ensure loading is set to false even in case of an error
      }
    };

    fetchOrders();
  }, [firstName]);

  // Fetch cart data from the API when the component mounts
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartResponse = await axios.get("http://localhost:2000/api/cart");
        const cartData = cartResponse.data.cart.products.map((product) => ({
          ...product,
          quantity: product.quantity || 1,
        }));
        setCartProducts(cartData);

        const cartTotal = cartData.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        );
        setTotalAmount(cartTotal);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCart();
  }, []);

  // Render the component
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
          transition: "transform 0.2s",
        }}
      >
        <h3
          style={{
            fontFamily: "Cursive",
            fontWeight: "500",
            backgroundColor: "#d32f2f",
            color: "#fff",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "20px",
            fontSize: "22px",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Your Cart
        </h3>
        <div
          style={{
            backgroundColor: "#fafafa",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h4>Cart Items:</h4>
          {cartProducts.map((product, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <span>{product.name}</span>
              <span>
                ₹{product.price} x {product.quantity}
              </span>
            </div>
          ))}
        </div>
        <div
          style={{
            marginBottom: "20px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <p>
            Total Items:{" "}
            <span style={{ color: "#1976d2" }}>{cartProducts.length}</span>
          </p>
          <p>
            Total Amount:{" "}
            <span style={{ color: "#d32f2f" }}>₹{totalAmount}</span>
          </p>
        </div>
        <p
          style={{ color: "#4caf50", fontWeight: "600", marginBottom: "15px" }}
        >
          Thank you for shopping with us!
        </p>
        <Link
          to="/checkout"
          style={{
            display: "inline-block",
            textDecoration: "none",
            padding: "12px 25px",
            backgroundColor: "#ff9800",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f57c00")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff9800")}
        >
          Proceed to Checkout
        </Link>
      </div>
      <div className="order-container">
        <h2>User Order Details</h2>
        {loading ? (
          <p>Loading...</p>
        ) : orders.length === 0 ? (
          <p>No orders found for {firstName}.</p>
        ) : (
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
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{`${order.firstName} ${order.lastName || ""}`}</td>

                  {/* Only render rowSpan and totalOrders in the first row */}
                  {index === 0 && (
                    <td rowSpan={orders.length}>{orders.length}</td>
                  )}

                  <td>{`${order.country}, ${order.street}, ${order.town}, ${order.state}, ${order.pincode}`}</td>
                  <td>{order.phoneNo}</td>
                  <td>{order.email}</td>
                  <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                  <td>${order.totalAmount || "N/A"}</td>
                  <td>
                    {new Date(
                      new Date(order.orderDate).setDate(
                        new Date(order.orderDate).getDate() + 7
                      )
                    ).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
