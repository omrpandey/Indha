import React, { useState, useEffect } from "react";
import "./productpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

export const Productpage = () => {
  const [rangeValue, setRangeValue] = useState(5000); // Default price range
  const [products, setProducts] = useState([]); // All products
  const [displayedProducts, setDisplayedProducts] = useState([]); // Products shown on the right side
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // Error state
  const [dropdownVisibility, setDropdownVisibility] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product state

  useEffect(() => {
    // Fetch all products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:2000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setDisplayedProducts(data); // Initially show all products
        setLoading(false);
      } catch (error) {
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Group products dynamically by category
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  // Handle category click to filter products
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setDropdownVisibility((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
    setDisplayedProducts(groupedProducts[category] || []);
  };

  // Handle individual product click to show only that product
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product
    setDisplayedProducts([product]); // Show only the selected product
  };

  // Handle range change to filter products by price
  const handleRangeChange = (e) => {
    const value = e.target.value;
    setRangeValue(value);
    setDisplayedProducts(
      products.filter(
        (product) =>
          (product.discountedPrice || product.price) <= value
      )
    );
  };

  // Handle adding a product to the cart
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
    console.log("Cart Details:", data.cart); // Optional: For debugging
  } catch (error) {
    console.error("Error adding product to cart:", error.message);
    alert("Error adding product to cart. Please try again.");
  }
};


  return (
    <>
      <div className="category">
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

                  {/* Dropdown with individual products */}
                  {dropdownVisibility[category] && (
                    <ul className="dropdown">
                      {groupedProducts[category].map((product) => (
                        <li
                          key={product._id}
                          className="dropdown-item"
                          onClick={() => handleProductClick(product)}
                          style={{ cursor: "pointer" }}
                        >
                          {product.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Display on the Right Side */}
        <div className="product-side">
          <h2 className="filter-title">Filter Item<span className="ccc">S</span></h2>
          
          {/* Price Range Filter */}
          <div className="price-filter">
            <input
              type="range"
              min="0"
              max="10000"
              value={rangeValue}
              onChange={handleRangeChange}
              className="price-range"
            />
            <span>₹{rangeValue}</span>
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
                    <div className="add-section">
                      <button className="cart">
                        <FontAwesomeIcon icon={faHeart} className="like" />
                      </button>
                      <button
                        className="cart"
                        onClick={() => handleAddToCart(product._id)}
                      >
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </button>
                    </div>
                    <div className="detail">
                      <h5>{product.name}</h5>
                      <p>₹{product.discountedPrice || product.price} /-</p>
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
    </>
  );
};
