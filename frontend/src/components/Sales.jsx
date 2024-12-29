import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./productpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useCategory } from "./CategoryContext";
import CryptoJS from "crypto-js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function to hash product ID
const hashProductId = (id) => CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(id));

export const Sales = () => {
  const { selectedCategory, searchQuery } = useCategory();
  const [rangeValue, setRangeValue] = useState(5000);
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [dropdownVisibility, setDropdownVisibility] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:2000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        
        // Filter products that have a discounted price
        const discountedProducts = data.filter(product => product.discountedPrice < product.price);
  
        setProducts(discountedProducts);
        setDisplayedProducts(discountedProducts);
        setLoading(false);
      } catch (error) {
        setError("Error fetching products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  
  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Categories" ||
        (product.category || "").includes(selectedCategory);
      const matchesSearchQuery =
        product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags?.some((tag) =>
          tag?.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesPrice =
        (product.discountedPrice || product.price) <= rangeValue;

      return matchesCategory && matchesSearchQuery && matchesPrice;
    });

    setDisplayedProducts(filteredProducts);
  }, [selectedCategory, searchQuery, rangeValue, products]);

  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  const handleCategoryClick = (category) => {
    setDropdownVisibility((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
    setDisplayedProducts(
      category === "All Categories" ? products : groupedProducts[category] || []
    );
  };

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleAddToWishlist = async (productId) => {
    try {
      const response = await fetch("http://localhost:2000/api/wishlist/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product to wishlist");
      }

      const data = await response.json();
      toast.success(data.message || "Product added to wishlist!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error adding product to wishlist:", error.message);
      toast.error("Error adding product to wishlist. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

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
      toast.success(data.message || "Product added to cart!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error adding product to cart:", error.message);
      toast.error("Error adding product to cart. Please try again.", {
        position: "top",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="category">
      <ToastContainer /> {/* Add ToastContainer here */}
      <div className="head">
        <h3>
          <span className="cc">C</span>atego
          <span className="ory">ry</span>
        </h3>
        <div className="lists">
          <ul>
            {Object.keys(groupedProducts).map((category) => (
              <li key={category}>
                <div
                  className="category-header"
                  onClick={() => handleCategoryClick(category)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="text">
                    {category} ({groupedProducts[category].length})
                  </span>
                  <span className="plus">
                    {dropdownVisibility[category] ? "-" : "+"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product-side">
        <h6 className="filter-title">
          Filter Item<span className="ccc">S</span>
        </h6>

        <div className="price-filter">
          <input
            type="range"
            min="0"
            max="10000"
            value={rangeValue}
            onChange={handleRangeChange}
            className="price-range"
          />
          <span className="price-range">Current Price :₹{rangeValue}</span>
        </div>

        <div className="allproduct">
          <div className="wrap">
            {loading ? (
              <p>Loading products...</p>
            ) : error ? (
              <p>{error}</p>
            ) : displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <div className="card" key={product._id}>
                  <Link to={`/productui/${hashProductId(product._id)}`}>
                    <img
                      src={
                        product.images && product.images.length > 0
                          ? product.images[0].startsWith("/")
                            ? `http://localhost:2000${product.images[0]}`
                            : `http://localhost:2000/${product.images[0]}`
                          : "./assets/nw2.png"
                      }
                      alt={product.name}
                    />
                    <div className="detail">
                      <h5>{product.name}</h5>
                      <p>₹{product.discountedPrice || product.price} /-</p>
                    </div>
                  </Link>
                  <div className="add-section">
                    <button
                      className="cart"
                      onClick={() => handleAddToWishlist(product._id)}
                    >
                      <FontAwesomeIcon icon={faHeart} className="like" />
                    </button>

                    <button
                      className="cart"
                      onClick={() => handleAddToCart(product._id)}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
