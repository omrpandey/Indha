import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from React Router

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/cart");
        const cartData = response.data.cart.products;

        const updatedProducts = cartData.map((product) => ({
          ...product,
          quantity: product.quantity || 1,
        }));

        setProducts(updatedProducts);

        const total = updatedProducts.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        );
        setTotalAmount(total);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  const incrementQuantity = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index && product.quantity < 3
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  useEffect(() => {
    const total = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotalAmount(total);
  }, [products]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          marginBottom: "20px",
          overflowY: "auto",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead>
            <tr>
              {["Sr. No", "Image", "Name", "Price", "Quantity", "Actions"].map(
                (header) => (
                  <th
                    key={header}
                    style={{
                      border: "1px solid #ddd",
                      padding: "12px",
                      fontWeight: "500",
                      fontFamily: "cursive",
                      backgroundColor: "red",
                      color: "#fff",
                    }}
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.productId}>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {index + 1}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  <img
                    src={
                      product &&
                      product.imageUrl &&
                      product.imageUrl.startsWith("/")
                        ? `http://localhost:2000${product.imageUrl}`
                        : product.imageUrl || "/default-image.jpg"
                    }
                    alt={product.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "5px",
                    }}
                  />
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {product.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  ₹{product.price}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {product.quantity}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  <button
                    onClick={() => incrementQuantity(index)}
                    style={{
                      marginRight: "10px",
                      padding: "5px 10px",
                      cursor: "pointer",
                      backgroundColor: "#ff4747",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => decrementQuantity(index)}
                    style={{
                      padding: "5px 10px",
                      cursor: "pointer",
                      backgroundColor: "#4caf50",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          width: "40%",
          margin: "auto",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "cursive",
            fontWeight: "500",
            marginBottom: "20px",
            backgroundColor: "red",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Final Bill
        </h3>
        <p>
          <strong>Total Items:</strong> {products.length}
        </p>
        <p>
          <strong>Total Amount:</strong> ₹{totalAmount}
        </p>
        <p style={{ color: "#4caf50", fontWeight: "bold" }}>
          Thank you for shopping with us!
        </p>
        <Link
          to="/checkout"
          style={{
            textDecoration: "none",
            backgroundColor: "orange",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            display: "inline-block",
            marginTop: "15px",
          }}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};
