import React, { useState, useEffect } from "react";
import "./wish.css";

export const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch("http://localhost:2000/api/wishlist");
        if (!response.ok) {
          throw new Error("Failed to fetch wishlist");
        }
        const data = await response.json();
        setWishlist(data.wishlist || []);
        setLoading(false);
      } catch (error) {
        setError("Error fetching wishlist");
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const response = await fetch("http://localhost:2000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
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

  return (
    <div className="wishlist-card">
      {loading ? (
        <p>Loading wishlist...</p>
      ) : error ? (
        <p>{error}</p>
      ) : wishlist.length > 0 ? (
        wishlist.map((product) => (
          <div className="product-card" key={product.productId}>
            <img
              src={
                product.imageUrl?.startsWith("/")
                  ? `http://localhost:2000${product.imageUrl}`
                  : product.imageUrl || "./assets/nw2.png"
              }
              alt={product.name}
            />
            <div className="wish-content">
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <div className="btn-container">
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product.productId)}
                >
                  Add to Cart
                </button>
               
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items in wishlist.</p>
      )}
    </div>
  );
};
