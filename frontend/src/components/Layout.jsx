import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./layout.css";

export const Layout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    const storedUsername = Cookies.get("username");
    setIsLoggedIn(!!token);
    setUsername(storedUsername || "User");
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/login");
  };

  return (
    <>
      <div className="admin-container">
        <div className="adm-sidebar">
          <h2>Welcome <span className="user">{username}</span></h2>
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
              <NavLink to="/admin/address" className={({ isActive }) => (isActive ? "active" : "")}>
                Address
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/update" className={({ isActive }) => (isActive ? "active" : "")}>
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
        <p>© 2025 User Panel. All Rights Reserved by Group 07 SYIT.</p>
      </footer>
    </>
  );
};
