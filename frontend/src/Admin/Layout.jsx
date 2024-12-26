import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./layout.css"; // Ensure the CSS file exists

export const Layout = () => {
  return (
    <>

      <div className="admin-container">
        <div className="adm-sidebar">
          <h2>Welcome Pahadi</h2>
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
              <NavLink to="/admin/download" className={({ isActive }) => (isActive ? "active" : "")}>
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
            <li>
              <NavLink to="/admin/logout" className={({ isActive }) => (isActive ? "active" : "")}>
                Log-Out
              </NavLink>
            </li>
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
