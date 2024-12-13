import React, { useState } from 'react';
import './Header.css';
import './Modal.css'; // Separate CSS for modal
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
       const form = e.target;
       const username = form.querySelector('input[type="text"]').value.trim();
       const password = form.querySelector('input[type="password"]').value.trim();

   
       if (!username || !password) {
         toast.error("All fields are required!");
         return;
       }
   
       // Simulate a successful sign-up action
       toast.success("Successfully signed up!");
       form.reset();
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
            <NavLink to="/" className="nav-link" activeClassName="active" exact>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
            <div className="dropdown-container">
              <NavLink to="/product" className="nav-link" activeClassName="active">
                Product
              </NavLink>
              <div className="dropdown">
                <NavLink to="/product/item1" className="nav-link" activeClassName="active">Christmas Gifts</NavLink>
                <NavLink to="/product/item2" className="nav-link" activeClassName="active">Festival Needs</NavLink>
                <NavLink to="/product/item3" className="nav-link" activeClassName="active">Corporate Gifting</NavLink>
                <NavLink to="/product/item4" className="nav-link" activeClassName="active">Sustainable Products</NavLink>
                <NavLink to="/product/item5" className="nav-link" activeClassName="active">Home Furnishing</NavLink>
              </div>
            </div>
            <NavLink to="/blog" className="nav-link" activeClassName="active">
              Blog
            </NavLink>
            <NavLink to="/join" className="nav-link" activeClassName="active">
              Join Us
            </NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact Us
            </NavLink>
            <NavLink to="/sale" className="nav-link" activeClassName="active">
              Sale
            </NavLink>
          </div>
          <div className="search">
            <p>{selectedCategory}</p>
            <ul className="search-dropdown">
              <li onClick={() => handleCategorySelect('All Categories')}>
                <NavLink>All Categories</NavLink>
              </li>
              <li onClick={() => handleCategorySelect('Electronics')}>
                <NavLink>Electronics</NavLink>
              </li>
              <li onClick={() => handleCategorySelect('Fashion')}>
                <NavLink>Fashion</NavLink>
              </li>
              <li onClick={() => handleCategorySelect('Home & Kitchen')}>
                <NavLink>Home & Kitchen</NavLink>
              </li>
              <li onClick={() => handleCategorySelect('Books')}>
                <NavLink>Books</NavLink>
              </li>
              <li onClick={() => handleCategorySelect('Beauty Products')}>
                <NavLink>Beauty Products</NavLink>
              </li>
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
            <h2><span className="or">Welcome</span> Back Get Loggin</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter your username" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
              </div>
              <button type="submit" className="login-button">Get Login</button>
            </form>
            <button className="close-modal" onClick={toggleLoginModal}><FontAwesomeIcon icon={faXmark} style={{ color: "red", fontSize: "24px" }} /></button>
          </div>
          <div className="modal-overlay" onClick={toggleLoginModal}></div>
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};
