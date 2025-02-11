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
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <h6 style={{ fontFamily: "Cursive", fontSize: "22px", borderBottom: "1px solid rgba(10, 10, 10, 0.58)", width: "30%", marginLeft: "120px", marginBottom: "20px", paddingBottom: "10px" }}>
        Almost There! Complete Your Purchase
      </h6>

      <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)" }}>
        <table style={{ width: "100%", textAlign: "center" }}>
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
                <td>
                  <button onClick={() => incrementQuantity(index)}>+</button>
                  <button onClick={() => decrementQuantity(index)}>-</button>
                </td>
                <td>
                  <button onClick={() => deleteProduct(product._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", marginTop: "20px", textAlign: "center" }}>
        <h2 style={{ color: "orangered" }}>Order Summary</h2>
        <p>Total Items: {products.length}</p>
        <p>Total Amount: ₹{totalAmount.toFixed(2)}</p>
        <p style={{ fontStyle: "italic", color: "red" }}>Thank you for your purchase! 🎉</p>
      </div>
    </div>
  );
};
