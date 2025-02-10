import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CryptoJS from "crypto-js";
import "./productui.css";

// Function to decode the hashed product ID
const decodeProductId = (hash) => CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(hash));

export const Productui = () => {
  const { productId: hashedId } = useParams(); // Get hashed product ID from URL
  const productId = decodeProductId(hashedId); // Decode the hash to get the original product ID

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
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
        body: JSON.stringify({ productId: product._id }), // Use the decoded product ID
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
        body: JSON.stringify({ productId: product._id }), // Use the decoded product ID
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
          <p className="proui_line"></p>
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: "20px", color: "#ffa500",paddingLeft:"8px" }}>
  
 </div>
 {product.rating > 0 ? (
  <div className="rating-cont">
    {product.rating === 1 && <div>1 star</div>}
    {product.rating === 1.5 && <div>1.5 stars</div>}
    {product.rating === 2 && <div>2 stars</div>}
    {product.rating === 2.5 && <div>2.5 stars</div>}
    {product.rating === 3 && <div>3 stars</div>}
    {product.rating === 3.5 && <div>3.5 stars</div>}
    {product.rating === 4 && <div>4 stars</div>}
    {product.rating === 4.5 && <div>4.5 stars</div>}
    {product.rating === 5 && <div>5 stars</div>}
  </div>
) : (
  <div>No stars</div>
)}


        <div className="ui-desc">
          <p>{product.description}</p>
        </div>
        <div className="ui-desc">
        
          
       {product.discountedPrice > 0 ? (
      
        <span className="p_price">
           <span className="cst_inr">${product.price}</span>
           <span className="cst_dcr">${product.discountedPrice}</span>
        </span>
      ):( <span className="cst_inr">${product.price}</span>)}
          
        </div>
        <div className="ui-size">
          {product.sizes?.length > 0 ? (
            <ul>
              {product.sizes.map((size) => (
                <li key={size}>{size}</li>
              ))}
            </ul>
          ) : (
    
      <div>
      
      
      </div>
    
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
