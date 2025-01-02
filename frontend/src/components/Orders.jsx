import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Orders = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        // Fetch cart products
        const cartResponse = await axios.get("http://localhost:2000/api/cart");
        const cartData = cartResponse.data.cart.products.map((product) => ({
          ...product,
          quantity: product.quantity || 1,
        }));
        setCartProducts(cartData);

        // Calculate total amount
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
        <p style={{ color: "#4caf50", fontWeight: "600", marginBottom: "15px" }}>
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
    </div>
  );
};
