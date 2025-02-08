import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUser, FaBoxes } from "react-icons/fa";
import Cookies from "js-cookie";

function Admindashboard() {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    // Remove authentication tokens
    Cookies.remove("token");
    Cookies.remove("username");
    Cookies.remove("isAdmin");

    // Redirect to the homepage
    window.location.href = "http://localhost:3000"; // Force full-page reload
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={styles.sidebar}>
        <h3 style={styles.header}>Admin Panel</h3>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <NavLink
              to="/admindashboard/userpage"
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.activeLink } : styles.link
              }
            >
              <FaUser style={styles.icon} /> Users
            </NavLink>
          </li>
          <li style={styles.navItem}>
            <NavLink
              to="/admindashboard/showproduct"
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.activeLink } : styles.link
              }
            >
              <FaBoxes style={styles.icon} /> Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admindashboard/showcontact"
              style={({ isActive }) =>
                isActive ? { ...styles.link, ...styles.activeLink } : styles.link
              }
            >
              <FaBoxes style={styles.icon} /> Contacts
            </NavLink>
          </li>
          <li>
            {/* Logout button */}
            <button onClick={handleLogout} style={styles.logoutButton}>
              <FaBoxes style={styles.icon} /> Log-Out
            </button>
          </li>
        </ul>
      </div>

      {/* This will render the child components */}
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    backgroundColor: "#B71C1C",
    color: "white",
    height: "100vh",
    padding: "20px 15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    boxShadow: "4px 0 15px rgba(0, 0, 0, 0.2)",
  },
  header: {
    color: "white",
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: "30px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    width: "100%",
  },
  navItem: {
    width: "100%",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.1rem",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    fontFamily: "Arial, sans-serif",
    width: "100%",
  },
  icon: {
    marginRight: "15px",
  },
  activeLink: {
    backgroundColor: "#FF5722",
    color: "white",
    fontWeight: "bold",
    paddingLeft: "25px",
  },
  logoutButton: {
    backgroundColor: "#FF5722",
    color: "white",
    border: "none",
    fontSize: "1.1rem",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    cursor: "pointer",
  },
};

export default Admindashboard;
