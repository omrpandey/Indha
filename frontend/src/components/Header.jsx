import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import "./Modal.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { useCategory } from "./CategoryContext";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie"; // Import js-cookie

export const Header = () => {
  const { selectedCategory, setSelectedCategory, setSearchQuery } =
    useCategory();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [cartCount, setCartCount] = useState(0);
  const [cartDetails, setCartDetails] = useState([]);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const navigate = useNavigate();

  // Fetch cart details on mount
  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/cart");
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

  const toggleLoginModal = () => {
    setIsLoginModalOpen((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const isAdminLogin = loginData.username === "admin";
      const loginUrl = isAdminLogin
        ? "http://localhost:2000/api/admin/login"
        : "http://localhost:2000/api/user/login";

      const response = await axios.post(loginUrl, loginData);

      if (response.data.token) {
        toast.success(
          isAdminLogin ? "Admin login successful!" : "User login successful!"
        );
        localStorage.setItem("token", response.data.token);
        Cookies.set("username", loginData.username);
        Cookies.set("token", response.data.token); // Save username in cookie

        // Close modal
        setIsLoginModalOpen(false);

        // Navigation logic
        if (isAdminLogin) {
          navigate("/admindashboard"); // Navigate to AdminLayout for admins
        } else {
          navigate("/admin/dashboard"); // Navigate to Layout for users
        }
      }
    } catch (error) {
      toast.error(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    }
  };

  // Define the handleCartHover function
  const handleCartHover = (isHovered) => {
    setIsCartHovered(isHovered);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="/assets/ndha1.webp" alt="Logo 1" />
          <img src="/assets/indha2.jpg" alt="Logo 2" />
        </div>
        <div className="content">
          <div className="links">
            <NavLink to="/" className="nav-link" exact>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/productpage" className="nav-link">
              Product
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
            <NavLink to="/join" className="nav-link">
              Join Us
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
            <NavLink to="/Sales" className="nav-link">
              Sale
            </NavLink>
          </div>
          <div className="search">
            <p>{selectedCategory}</p>
            <ul className="search-dropdown">
              {[
                "All Categories",
                "Children",
                "Electronics",
                "Fashion",
                "Home & Kitchen",
                "Books",
                "Beauty Products",
              ].map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                >
                  <NavLink to="#">{category}</NavLink>
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
            onMouseEnter={() => handleCartHover(true)} // Updated to call handleCartHover
            onMouseLeave={() => handleCartHover(false)} // Updated to call handleCartHover
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
                      <img
                        src={
                          typeof item.imageUrl === "string" &&
                          item.imageUrl.startsWith("/")
                            ? `http://localhost:2000${item.imageUrl}`
                            : item.imageUrl || "default-image-url.jpg"
                        }
                        alt={item.name || "Default Name"}
                      />

                      <p>{item.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ₹{item.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <NavLink to="/wishlist">
            <FontAwesomeIcon className="icon" icon={faHeart} />
          </NavLink>
        </div>
      </div>

      {isLoginModalOpen && (
        <div className="modal-wrapper">
          <div className="modal">
            <h2>Welcome Back! Please Login</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={loginData.username}
                  onChange={handleInputChange}
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
    </>
  );
};
