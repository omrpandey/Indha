import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CryptoJS from "crypto-js";
import "./productui.css";

// Function to decode the hashed product ID
const decodeProductId = (hash) => {
  try {
    const decoded = CryptoJS.enc.Base64.parse(hash).toString(CryptoJS.enc.Utf8);
    if (!decoded) throw new Error("Invalid Base64 string");
    return decoded;
  } catch (error) {
    console.error("Failed to decode product ID:", error.message);
    return null; // Return null if decoding fails
  }
};

export const Sales = () => {
  const { productId: hashedId } = useParams(); // Get hashed product ID from URL
  const productId = decodeProductId(hashedId); // Decode the hash to get the original product ID

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!productId) {
      setError("Invalid product ID.");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:2000/api/products/${productId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.statusText}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error.message);
        setError(`Error fetching product data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
    try {
      const response = await fetch("http://localhost:2000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product?._id }), // Use the decoded product ID
      });

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      const data = await response.json();
      alert(data.message || "Product added to cart!");
    } catch (error) {
      console.error("Error adding product to cart:", error.message);
      alert("Error adding product to cart. Please try again.");
    }
  };

  const handleAddToWishlist = async () => {
    try {
      const response = await fetch("http://localhost:2000/api/wishlist/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product?._id }), // Use the decoded product ID
      });

      if (!response.ok) {
        throw new Error("Failed to add product to wishlist");
      }

      const data = await response.json();
      alert(data.message || "Product added to wishlist!");
    } catch (error) {
      console.error("Error adding product to wishlist:", error.message);
      alert("Error adding product to wishlist. Please try again.");
    }
  };

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="ui">
      <div className="ui-left">
        <img
          src={`http://localhost:2000${product.images?.[0] || "/assets/nw3.png"}`}
          alt={product.name}
        />
      </div>

      <div className="ui-right">
        <div className="ui-title">
          <h3>{product.name}</h3>
        </div>
        <div className="ui-desc">
          <p>{product.description}</p>
        </div>

        <div className="ui-size">
          {product.sizes?.length > 0 ? (
            <ul>
              {product.sizes.map((size) => (
                <li key={size}>{size}</li>
              ))}
            </ul>
          ) : (
            <p>No sizes available</p>
          )}
        </div>
        <div className="add-cart">
          <button className="ui-btn" onClick={handleAddToCart}>
            Buy Now!
          </button>
          <button className="ui-save" onClick={handleAddToWishlist}>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
 