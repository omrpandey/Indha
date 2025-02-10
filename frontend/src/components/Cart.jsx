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

  // Delete a single product from cart
  const deleteProduct = async (productId) => {
    try {
      console.log("Deleting product with ID:", productId);
      await axios.delete(`http://localhost:2000/api/cart/${productId}`);
      setProducts(
        (prevProducts) =>
          prevProducts.filter((product) => product._id !== productId) // Use _id here
      );
      // Reload the page to reflect the changes
      window.location.reload();  
    } catch (error) {
      console.error("Error deleting product:", error);
    }
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
        height: "auto",
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
          paddingLeft: "280px",
          paddingBottom: "20px",
        }}
      >
        <table
          style={{
            width: "110%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead>
            <tr>
              {[
                "Sr. No",
                "Image",
                "Name",
                "Price",
                "Quantity",
                "Count",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  style={{
                    textAlign: "center",
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
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.productId}>
                <td style={{ border: "1px solid #ddd", padding: "10px", fontFamily: "cursive" }}>
                  {index + 1}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px", fontFamily: "cursive" }}>
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
                <td style={{ border: "1px solid #ddd", padding: "10px", fontFamily: "cursive" }}>
                  {product.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px", fontFamily: "cursive" }}>
                  ₹{product.price}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px", fontFamily: "cursive" }}>
                  {product.quantity}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px", fontFamily: "cursive" }}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                        marginRight: "10px",
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
                  </div>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px", fontFamily: "cursive" }}>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    style={{
                      padding: "5px 10px",
                      cursor: "pointer",
                      backgroundColor: "red",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{
      backgroundColor: '#ffffff',
      width:"400px",
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      padding: '30px',
      maxWidth: '420px',
      margin: '20px auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      transition: 'all 0.3s ease-in-out',
     
   
    }}>
      {/* Header */}
      <h2 style={{
        // margin: '0 0 20px 0',
        // color: '#1A202C',
        fontSize: '1.7rem',
        fontWeight: '800',
        letterSpacing: '1.2px',
        // textAlign: 'center',
        display:"flex",
        alignItems:"start",
        justifyContent:"start",

        borderBottom: '2px solid #CBD5E0',
        fontFamily:"cursive",
        paddingBottom: '5px',
        // textTransform: 'uppercase',
        background: 'linear-gradient(90deg, rgba(72, 187, 120, 0.8), rgba(72, 187, 120, 1))',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        color:"orangered",
      }}>
        Order Summary
      </h2>

      {/* Order Details */}
      <div style={{
        marginBottom: '24px',
      }}>
        {/* Total Items */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
          color: '#2D3748',
          fontSize: '1.1rem',
        }}>
          <span style={{
            fontWeight: '600',
            color: '#4A5568',
          }}>Total Items:</span>
          <span style={{
            fontWeight: '500',
            color: 'red',
          }}>{products.length}</span>
        </div>

        {/* Total Price */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
          color: '#2D3748',
          fontSize: '1.1rem',
        }}>
          <span style={{
            fontWeight: '600',
            color: '#4A5568',
          }}>Total Amount:</span>
          <span style={{
            fontWeight: '500',
            color: '#2D3748',
            fontSize: '1.2rem',
            color: 'red',
          }}>${totalAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Thank You Section */}
      <div style={{
        backgroundColor: 'rgb(255, 231, 231)',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center',
        marginTop: '30px',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}>
        <p style={{
          margin: '0',
          color: 'red',
          fontWeight: '500',
          fontSize: '1.1rem',
          fontStyle: 'italic',
          letterSpacing: '1px',
        }}>
          Thank you for your purchase! 🎉
        </p>
      </div>
    </div>
    </div>
  );
};
