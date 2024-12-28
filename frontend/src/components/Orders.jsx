import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Orders = () => {
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = [
        { name: "Product 1", price: 500, quantity: 2 },
        { name: "Product 2", price: 1000, quantity: 1 },
      ];
      setProducts(orders);
      const total = orders.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotalAmount(total);
    };

    fetchOrders();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        // backgroundColor: "#f4f4f8",
        // minHeight: "100vh",
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
            fontWeight: "600",
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
          Final Bill
        </h3>
        <div
          style={{
            backgroundColor: "#fafafa",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          {products.map((product, index) => (
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
            Total Items: <span style={{ color: "#1976d2" }}>{products.length}</span>
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
