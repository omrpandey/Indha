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
  const [isValid, setIsValid] = useState(false);
  const [addressData, setAddressData] = useState(null);

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

  useEffect(() => {
    const fetchAddressData = async () => {
      try {
        const response = await fetch(
          `http://localhost:2000/api/addresses/${firstName}`
        );
        const data = await response.json();

        if (response.ok && data) {
          setAddressData(data);
          // Check if all required fields are filled
          const isAllFieldsFilled =
            data.firstName &&
            data.lastName &&
            data.country &&
            data.streetAddress &&
            data.city &&
            data.stateOrCountry &&
            data.pincode &&
            data.phoneNumber &&
            data.email;
          setIsValid(isAllFieldsFilled);
        } else {
          setIsValid(false);
        }
      } catch (error) {
        console.error("Error fetching address data:", error);
      }
    };

    fetchAddressData();
  }, [firstName]); // Re-fetch if firstName changes

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
      {cartProducts.length > 0 ? (
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
            style={{
              color: "#4caf50",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            Thank you for shopping with us!
          </p>
          {isValid ? (
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
          ) : (
            <div>
              {/* If address is not valid, show a message with a link */}
              <p>
                Address not set.{" "}
                <Link
                  to="/address"
                  style={{
                    color: "#ff9800",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Go to Address page
                </Link>{" "}
                and set your address to place an order.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "20px",
            backgroundColor: "#fff3cd",
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
              backgroundColor: "#ff9800",
              color: "#fff",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "20px",
              fontSize: "22px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Your Cart is Empty!
          </h3>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#d32f2f",
              marginBottom: "15px",
            }}
          >
            “Oops! Your cart feels lonely. Fill it up with amazing products!”
          </p>
          <Link
            to="/productpage"
            style={{
              display: "inline-block",
              textDecoration: "none",
              padding: "12px 25px",
              backgroundColor: "#4caf50",
              color: "#fff",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#388e3c")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4caf50")}
          >
            Start Shopping Now
          </Link>
        </div>
      )}

      <div className="order-container">
        <h2>User Order Details</h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "600",
            color: "#4b5563",
            marginTop: "1rem",
            padding: "0.5rem 1.5rem",
            backgroundColor: "#f3f4f6",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
          }}
        >
          Total Orders: {totalOrders}
        </p>

        {loading ? (
          <p>Loading...</p>
        ) : orders.length === 0 ? (
          <p>No orders found for {firstName}.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
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
