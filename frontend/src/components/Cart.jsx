import React, { useState } from "react";

export const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      name: "Product 1",
      price: 100,
      quantity: 2,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      name: "Product 2",
      price: 200,
      quantity: 1,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      name: "Product 3",
      price: 300,
      quantity: 5,
    },
  ]);

  // Calculate total amount
  const totalAmount = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9f9f9", // Light background color
        padding: "20px",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          height: "50%",
          width: "100%",
          backgroundImage: "url('./assets/cartimg.jpg')", // Replace with actual image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "20px 0",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow for better design
        }}
      ></div>

      {/* Table Section */}
      <div
        style={{
          width: "100%",
          marginBottom: "20px",
          overflowY: "auto",
          backgroundColor: "#fff", // White background for the table section
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
              {["Sr. No", "Image", "Name", "Price", "Quantity"].map((header) => (
                <th
                  key={header}
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    fontWeight: "500",
                    fontFamily: "cursive",
                    backgroundColor: "#f5f5f5", // Light gray header background
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    fontFamily: "monospace",
                  }}
                >
                  {index + 1}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    fontFamily: "monospace",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                  />
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    fontFamily: "monospace",
                  }}
                >
                  {product.name}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    fontFamily: "monospace",
                  }}
                >
                  ₹{product.price}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    fontFamily: "monospace",
                  }}
                >
                  {product.quantity}
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
          backgroundColor: "#fff", // White background
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for a clean design
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "cursive",
            fontWeight: "500",
            marginBottom: "20px",
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
            color: "#4caf50", // Green color for thank-you message
            fontWeight: "bold",
          }}
        >
          Thank you for shopping with us!
        </p>
      </div>
    </div>
  );
};
