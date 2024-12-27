import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie to manage cookies
import "./layout.css"; // Ensure the CSS file exists

export const Layout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(""); // State to store the username

  // Check if the user is logged in by verifying the cookie
  useEffect(() => {
    const token = Cookies.get("token");
    const storedUsername = Cookies.get("username"); // Get username from cookie
    console.log("Token:", token); // Check if token exists
    console.log("Username:", storedUsername); // Check if username exists

    setIsLoggedIn(!!token); // If token exists, set user as logged in
    setUsername(storedUsername || "User"); // Set username, fallback to "User"
  }, []);

  // Logout handler
  const handleLogout = () => {
    Cookies.remove("token"); // Remove the token cookie
    Cookies.remove("username"); // Remove the username cookie
    setIsLoggedIn(false); // Update the login state
    setUsername(""); // Clear the username
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <>
      <div className="admin-container">
        <div className="adm-sidebar">
          <h2>Welcome {username}</h2> {/* Dynamic username */}
          <ul>
            <li>
              <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/order" className={({ isActive }) => (isActive ? "active" : "")}>
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/productpage" className={({ isActive }) => (isActive ? "active" : "")}>
                Downloads
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/address" className={({ isActive }) => (isActive ? "active" : "")}>
                Address
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/account" className={({ isActive }) => (isActive ? "active" : "")}>
                Account Details
              </NavLink>
            </li>
            {isLoggedIn && (
              <li>
                <NavLink to="/" onClick={handleLogout} className={({ isActive }) => (isActive ? "active" : "")}>
                  Log-Out
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="adm-content">
          <Outlet />
        </div>
      </div>

      <footer>
        <p>© 2024 Admin Panel. All Rights Reserved.</p>
      </footer>
    </>
  );
};
