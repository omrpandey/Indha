import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Example validation checks
    const form = e.target;
    const username = form.querySelector('input[type="text"]').value.trim();
    const password = form.querySelector('input[type="password"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();

    if (!username || !password || !email) {
      toast.error("All fields are required!");
      return;
    }

    setIsLoading(true);  // Start loading

    try {
      // Send a POST request to the backend API
      const response = await axios.post('http://localhost:2000/api/auth/user/register', {
        username,
        email,
        password
      });

      toast.success(response.data.message);  // Display success message
      form.reset();  // Reset the form
    } catch (error) {
      console.error('Error signing up:', error);
      toast.error("Error signing up user");
    } finally {
      setIsLoading(false);  // Stop loading
    }
  };

  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <span className="ico-title">Follow Us On-</span>
          <div className="ico">
            <span className="footer-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="footer-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </span>
            <span className="footer-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About Us
            </NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact Us
            </NavLink>
            <NavLink to="/search" className="nav-link" activeClassName="active">
              Search
            </NavLink>
            <NavLink to="/Terms" className="nav-link" activeClassName="active">
              Terms & Conditions
            </NavLink>
            <NavLink to="/delivery" className="nav-link" activeClassName="active">
              Shipping & Delivery
            </NavLink>
            <NavLink to="/return" className="nav-link" activeClassName="active">
              Return & Refund Policy
            </NavLink>
          </div>
          <div className="footer-sigin">
            <h3>Sign up to Keep in Touch with Our Community</h3>
            <form onSubmit={handleSignUp}>
              <span className="row">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
              </span>
              <span className="row">
                <input type="email" className="email" placeholder="Email" />
              </span>
              <span className="input">
                <input type="submit" value={isLoading ? "Signing Up..." : "SIGN UP"} className="btn" disabled={isLoading} />
              </span>
            </form>
          </div>
          <div className="footer-copy">
            <p>© Copyright 2019. All Rights Reserved</p>
            <div className="payment">
              <img src="./assets/p1.svg" alt="p1" />
              <img src="./assets/p2.svg" alt="p2" />
              <img src="./assets/p3.svg" alt="p3" />
              <img src="./assets/p4.svg" alt="p4" />
              <img src="./assets/p5.svg" alt="p5" />
              <img src="./assets/p6.svg" alt="p6" />
              <img src="./assets/p7.svg" alt="p7" />
              <img src="./assets/p8.svg" alt="p8" />
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};
