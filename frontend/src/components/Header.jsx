import React from "react";
import "./Header.css";
import "./Modal.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { useCategory } from "./CategoryContext"; // Import the category context
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export const Header = () => {
  const { selectedCategory, setSelectedCategory } = useCategory(); // Use global category state
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [loginData, setLoginData] = React.useState({ username: "", password: "" });
  const [cartCount, setCartCount] = React.useState(0); // State for cart count
  const [cartDetails, setCartDetails] = React.useState([]); // State for cart details
  const [isCartHovered, setIsCartHovered] = React.useState(false); // State for hover status

  // Fetch cart count and details on component mount
  React.useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/cart"); // Adjust the URL as needed
        if (response.data.cart) {
          setCartDetails(response.data.cart.products || []);
        }
        if (response.data.cartCount !== undefined) {
          setCartCount(response.data.cartCount);
        }
      } catch (error) {
        console.error("Error fetching cart details:", error.message);
      }
    };

    fetchCartDetails();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Update global category state
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const isAdminLogin = loginData.username === "admin"; // Admin login condition
      let loginUrl = isAdminLogin
        ? "http://localhost:2000/api/admin/login"
        : "http://localhost:2000/api/user/login";

      const response = await axios.post(loginUrl, loginData);

      if (response.data.token) {
        toast.success(isAdminLogin ? "Admin login successful!" : "User login successful!");
        localStorage.setItem("token", response.data.token);
        setIsLoginModalOpen(false); // Close modal after successful login
      }
    } catch (error) {
      toast.error(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    }
  };

  const handleCartHover = (status) => {
    setIsCartHovered(status);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="./assets/ndha1.webp" alt="Logo 1" />
          <img src="./assets/indha2.jpg" alt="Logo 2" />
        </div>
        <div className="content">
          <div className="links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              exact
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              About
            </NavLink>
            <div className="dropdown-container">
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                Product
              </NavLink>
              <div className="dropdown">
                <NavLink to="/product/item1" className="nav-link">
                  Christmas Gifts
                </NavLink>
                <NavLink to="/product/item2" className="nav-link">
                  Festival Needs
                </NavLink>
                <NavLink to="/product/item3" className="nav-link">
                  Corporate Gifting
                </NavLink>
                <NavLink to="/product/item4" className="nav-link">
                  Sustainable Products
                </NavLink>
                <NavLink to="/product/item5" className="nav-link">
                  Home Furnishing
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/join"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Join Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/sale"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
            >
              Sale
            </NavLink>
          </div>
          <div className="search">
            <p>{selectedCategory}</p> {/* Use global state for category */}
            <ul className="search-dropdown">
              {[
                "All Categories",
                "Children", // Added "Children" category
                "Electronics",
                "Fashion",
                "Home & Kitchen",
                "Books",
                "Beauty Products",
              ].map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategorySelect(category)} // Update global state
                >
                  <NavLink to="#">{category}</NavLink>
                </li>
              ))}
            </ul>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="right">
          <FontAwesomeIcon
            className="icon"
            icon={faUser}
            onClick={toggleLoginModal}
          />
          <div
            className="cart-icon"
            onMouseEnter={() => handleCartHover(true)}
            onMouseLeave={() => handleCartHover(false)}
          >
            <NavLink to="/cart">
              <FontAwesomeIcon className="icon" icon={faShoppingCart} />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </NavLink>
            {isCartHovered && cartDetails.length > 0 && (
              <div className="cart-hover-details">
                <ul>
                  {cartDetails.map((item, index) => (
                    <li key={index}>
                      <p>{item.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ₹{item.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="modal-wrapper">
          <div className="modal">
            <h2>
              <span className="or">Welcome</span> Back! Please Login
            </h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={loginData.username}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            <button className="close-modal" onClick={toggleLoginModal}>
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "red", fontSize: "24px" }}
              />
            </button>
          </div>
          <div className="modal-overlay" onClick={toggleLoginModal}></div>
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};
