import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { 
  ShoppingCart, 
  Package, 
  Truck, 
  User, 
  CreditCard, 
  Box, 
  ShoppingBag, 
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Loader2
} from "lucide-react";
import "./OrderDetails.css";

export const Orders = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const token = localStorage.getItem("token");
  const [isValid, setIsValid] = useState(false);
  const [addressData, setAddressData] = useState(null);

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
  // ... existing state and logic remains the same ...

  return (
    <div className="orders-container">
      <div className="dashboard-grid">
        {/* Cart Section */}
        <div className="dashboard-card">
      <div className="card-header">
        <ShoppingCart size={24} />
        <h3>Your Shopping Cart</h3>
      </div>

      {cartProducts.length > 0 ? (
        <>
          <div className="cart-items">
            {cartProducts.map((product, index) => (
              <div key={index} className="cart-item">
                <div className="item-info">
                  <Box size={18} className="item-icon" />
                  <span className="item-name">{product.name}</span>
                </div>
                <span className="item-price">
                  ₹{product.price} ({product.quantity})
                </span>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <div className="total-item">
              <span>Total Items:</span>
              <span className="highlight">{cartProducts.length}</span>
            </div>
            <div className="total-item">
              <span>Total Amount:</span>
              <span className="highlight">₹{totalAmount}</span>
            </div>
          </div>
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
              <p>
                Address not set.{' '}
                <Link
                  to="/admin/address"
                  style={{
                    color: "#ff9800",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Go to Address page
                </Link>{' '}
                and set your address to place an order.
              </p>
            </div>
          )}
        </>
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
    </div>

        {/* Orders Section */}
        <div className="dashboard-card">
          <div className="card-header">
            <Package size={24} />
            <h3>Order History</h3>
            <div className="total-orders-badge">
              <Box size={18} />
              {totalOrders} orders
            </div>
          </div>

          {loading ? (
            <div className="loading-state">
              <Loader2 size={32} className="spinner" />
              <p>Loading orders...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="empty-state">
              <Clock size={48} className="empty-icon" />
              <p>No orders found for {firstName}</p>
            </div>
          ) : (
            <div className="table-container">
              <table className="order-table">
                <thead>
                  <tr>
                    <th><User size={16} /> Customer</th>
                    <th><MapPin size={16} /> Address</th>
                    <th><Phone size={16} /> Phone</th>
                    <th><Mail size={16} /> Email</th>
                    <th><Calendar size={16} /> Order Date</th>
                    <th>Total</th>
                    <th><Truck size={16} /> Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td className="user-cell">
                        <div className="user-info">
                          <User size={16} />
                          {`${order.firstName} ${order.lastName || ""}`}
                        </div>
                      </td>
                      <td>
                        <div className="address-cell">
                          <MapPin size={14} />
                          {`${order.street}, ${order.town}, ${order.state} ${order.pincode}`}
                        </div>
                      </td>
                      <td>
                        <div className="phone-cell">
                          <Phone size={14} />
                          {order.phoneNo}
                        </div>
                      </td>
                      <td>
                        <div className="email-cell">
                          <Mail size={14} />
                          {order.email}
                        </div>
                      </td>
                      <td>
                        <div className="date-cell">
                          <Calendar size={14} />
                          {new Date(order.orderDate).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="amount-cell">₹{order.totalAmount || "N/A"}</td>
                      <td>
                        <div className="delivery-cell">
                          <Truck size={14} />
                          {new Date(new Date(order.orderDate).setDate(
                            new Date(order.orderDate).getDate() + 7
                          )).toLocaleDateString()}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};