import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./layout.css";

export const Admindashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    const storedUsername = Cookies.get("username");
    setIsLoggedIn(!!token);
    setUsername(storedUsername || "User");

    // Redirect to admindash only if currently on /admindashboard
    if (location.pathname === "/admindashboard") {
      navigate("/admindashboard/userpage");
    }
  }, [navigate, location.pathname]);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    localStorage.removeItem("token");
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
              <NavLink to="/admindashboard/userpage" className={({ isActive }) => (isActive ? "active" : "")}>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/admindashboard/showproduct" className={({ isActive }) => (isActive ? "active" : "")}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/admindashboard/showcontact" className={({ isActive }) => (isActive ? "active" : "")}>
                Contact Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/admindashboard/bulkmail" className={({ isActive }) => (isActive ? "active" : "")}>
             Email Sender
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
