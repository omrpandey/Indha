import React, { useState } from "react";
import "./Header.css";
import "./Modal.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
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

    console.log("Login Data:", loginData);

    try {
      const isAdminLogin = loginData.username === "admin"; // Admin login condition
      let loginUrl = isAdminLogin ? "http://localhost:2000/api/admin/login" : "http://localhost:2000/api/user/login";

      const response = await axios.post(loginUrl, loginData);

      if (response.data.token) {
        // Handle successful login
        if (isAdminLogin) {
          toast.success("Admin login successful!");
        } else {
          toast.success("User login successful!");
        }

        // Store token in localStorage
        localStorage.setItem("token", response.data.token);

        setIsLoginModalOpen(false); // Close modal after successful login
      }
    } catch (error) {
      if (error.response) {
        // Display error message from backend
        toast.error(error.response.data.error || "Login failed!");
      } else {
        // Handle any other errors
        toast.error("An error occurred. Please try again.");
      }
    }
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
            <NavLink to="/" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} exact>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
              About
            </NavLink>
            <div className="dropdown-container">
              <NavLink to="/product" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
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
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
              Blog
            </NavLink>
            <NavLink to="/join" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
              Join Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
              Contact Us
            </NavLink>
            <NavLink to="/sale" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
              Sale
            </NavLink>
          </div>
          <div className="search">
            <p>{selectedCategory}</p>
            <ul className="search-dropdown">
              {["All Categories", "Electronics", "Fashion", "Home & Kitchen", "Books", "Beauty Products"].map(
                (category) => (
                  <li key={category} onClick={() => handleCategorySelect(category)}>
                    <NavLink to="#">{category}</NavLink>
                  </li>
                )
              )}
            </ul>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="right">
          <FontAwesomeIcon className="icon" icon={faUser} onClick={toggleLoginModal} />
          <FontAwesomeIcon className="icon" icon={faShoppingCart} />
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
              <FontAwesomeIcon icon={faXmark} style={{ color: "red", fontSize: "24px" }} />
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
