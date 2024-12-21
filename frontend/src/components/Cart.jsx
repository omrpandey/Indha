import React, { useState, useEffect } from "react";
import axios from "axios"; // Install axios for API calls

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/cart");
        const cartData = response.data.cart.products;

        // Initialize products with quantity management
        const updatedProducts = cartData.map((product) => ({
          ...product,
          quantity: product.quantity || 1, // Ensure default quantity is 1
        }));

        setProducts(updatedProducts);

        // Calculate initial total amount
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

  // Increment quantity handler
  const incrementQuantity = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index && product.quantity < 3
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  // Decrement quantity handler
  const decrementQuantity = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  // Recalculate total amount whenever products update
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
      {/* Table Section */}
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
                      backgroundColor: "red", // Orange background
                      color: "#fff", // White text
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
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    fontFamily: "monospace",
                    fontWeight: "bold", // Added bold font weight for data
                  }}
                >
                  {index + 1}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    fontFamily: "monospace",
                    fontWeight: "bold", // Added bold font weight for data
                  }}
                >
                  <img
                    src={
                      product &&
                      product.imageUrl &&
                      product.imageUrl.startsWith("/")
                        ? `http://localhost:2000${product.imageUrl}`
                        : product.imageUrl || "/default-image.jpg"
                    }
                    alt={product ? product.name : "Default Product"}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "5px",
                    }}
                  />
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    fontFamily: "monospace",
                    fontWeight: "bold", // Added bold font weight for data
                  }}
                >
                  {product.name}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    fontFamily: "monospace",
                    fontWeight: "bold", // Added bold font weight for data
                  }}
                >
                  ₹{product.price}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    fontFamily: "monospace",
                    fontWeight: "bold", // Added bold font weight for data
                  }}
                >
                  {product.quantity}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    fontFamily: "monospace",
                  }}
                >
                  <button
                    onClick={() => incrementQuantity(index)}
                    style={{
                      marginRight: "10px",
                      padding: "5px 10px",
                      cursor: "pointer",
                      backgroundColor: "#ff4747", // Red background for increment
                      color: "#fff", // White text
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
                      backgroundColor: "#4caf50", // Green background for decrement
                      color: "#fff", // White text
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

      {/* Final Bill Section */}
      <div
        style={{
          width: "40%",
          margin: "auto",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "cursive",
            fontWeight: "500",
            marginBottom: "20px",
            backgroundColor: "red", // Orange background for final bill heading
            color: "#fff", // White text
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
        <p
          style={{
            color: "#4caf50",
            fontWeight: "bold",
          }}
        >
          Thank you for shopping with us!
        </p>
      </div>
    </div>
  );
};
