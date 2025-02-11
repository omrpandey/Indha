import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        updateTotalAmount(updatedProducts);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  const updateTotalAmount = (cartProducts) => {
    const total = cartProducts.reduce(
      (acc, product) => acc + (product.discount > 0 ? product.discount : product.price) * product.quantity,
      0
    );
    setTotalAmount(total);
  };

  const incrementQuantity = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product, i) =>
        i === index && product.quantity < 3
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      updateTotalAmount(updatedProducts);
      return updatedProducts;
    });
  };

  const decrementQuantity = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product, i) =>
        i === index && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      updateTotalAmount(updatedProducts);
      return updatedProducts;
    });
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:2000/api/cart/${productId}`);
      setProducts((prevProducts) => {
        const updatedProducts = prevProducts.filter((product) => product._id !== productId);
        updateTotalAmount(updatedProducts);
        return updatedProducts;
      });
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

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
       <h6 style={{fontFamily:"Cursive",fontWeight:"400",fontSize:"22px",borderBottom:"1px solid rgba(10, 10, 10, 0.58)",width:"30%",marginLeft:"120px",marginBottom:"20px",paddingBottom:"10px"}}>Welcome to cart! <br /> Add more products to your cart</h6>

      <div
        style={{
          width: "100%",
          marginBottom: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          paddingBottom: "20px",
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
              {["Sr. No", "Image", "Name", "Price", "Quantity", "Count", "Actions"].map((header) => (
                <th key={header} style={{ backgroundColor: "red", color: "#fff", padding: "10px" }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={product.imageUrl.startsWith("/") ? `http://localhost:2000${product.imageUrl}` : product.imageUrl} alt={product.name} style={{ width: "80px", height: "80px" }} />
                </td>
                <td>{product.name}</td>
                <td>₹{product.discount > 0 ? product.discount : product.price}</td>
                <td>{product.quantity}</td>
                <td style={{ padding: "10px", fontFamily: "cursive" }}>
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
                <td style={{ padding: "10px" }}>
                  <button onClick={() => deleteProduct(product._id)}>Delete</button>
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
        fontWeight: '500',
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
        Cart Summary
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
            fontWeight: '200',
            color: '#4A5568',
            fontFamily:"cursive",
          }}>Total Items:</span>
          <span style={{
            fontWeight: '500',
            fontFamily:"cursive",
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
            fontWeight: '200',
            color: '#4A5568',
            fontFamily:"cursive",
          }}>Total Amount:</span>
          <span style={{
            fontWeight: '500',
            color: '#2D3748',
            fontSize: '1.2rem',
            fontFamily:"cursive",
            color: 'red',
          }}> ₹{totalAmount.toFixed(2)}</span>
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
          fontFamily:"cursive",
        }}>
          Please sign in to continoue to purchase! 🎉
        </p>
      </div>
    </div>
    </div>
  );
};
