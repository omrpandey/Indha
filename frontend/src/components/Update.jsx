import React, { useState, useEffect } from "react";
import axios from "axios"; // To make API requests

export const Update = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Fetch current user data on component mount
  useEffect(() => {
    // Assuming the JWT token is stored in localStorage or cookies
    const token = localStorage.getItem('token');
    
    if (token) {
      axios
        .get('http://localhost:2000/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          // Set the form fields with the user's existing data
          const { username, email } = response.data;
          setFormData({
            username: username || "",
            email: email || "",
            password: "", // Don't pre-fill password for security reasons
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form data
  const validateForm = () => {
    let isValid = true;
    let validationErrors = { username: "", email: "", password: "" };

    if (!formData.username) {
      validationErrors.username = "Username is required";
      isValid = false;
    }
    if (!formData.email) {
      validationErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email";
      isValid = false;
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const token = localStorage.getItem('token');
      axios
        .put(
          'http://localhost:2000/api/user/update',
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
          alert("Profile updated successfully!");
        })
        .catch((error) => {
          console.error("Error updating user:", error);
          alert("Failed to update profile");
        });
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "550px", 
        margin: "30px auto", 
        padding: "40px", 
        backgroundColor: "#f7f9fc",
        borderRadius: "10px", 
        boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)", 
        fontFamily: "'Roboto', sans-serif",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontFamily: "cursive",
          fontWeight: "500",
          textAlign: "center",
          marginBottom: "20px", 
          color: "#333",
          fontSize: "28px", 
          letterSpacing: "0.5px",
        }}
      >
        Update Your Profile
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column", position: "relative" }}>
          <label htmlFor="username" style={{ marginBottom: "6px", fontSize: "15px", fontWeight: "500", color: "#5a5a5a" }}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{
              padding: "12px", 
              borderRadius: "6px", 
              border: "1px solid #ddd",
              fontSize: "15px", 
              color: "#333",
              outline: "none",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            placeholder="Enter your username"
            required
          />
          {errors.username && (
            <span style={{ color: "#ff6b6b", fontSize: "12px", position: "absolute", bottom: "-18px" }}>
              {errors.username}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column", position: "relative" }}>
          <label htmlFor="email" style={{ marginBottom: "6px", fontSize: "15px", fontWeight: "500", color: "#5a5a5a" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: "12px", 
              borderRadius: "6px", 
              border: "1px solid #ddd",
              fontSize: "15px", 
              color: "#333",
              outline: "none",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            placeholder="Enter your email"
            required
          />
          {errors.email && (
            <span style={{ color: "#ff6b6b", fontSize: "12px", position: "absolute", bottom: "-18px" }}>
              {errors.email}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column", position: "relative" }}>
          <label htmlFor="password" style={{ marginBottom: "6px", fontSize: "15px", fontWeight: "500", color: "#5a5a5a" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              padding: "12px", 
              borderRadius: "6px", 
              border: "1px solid #ddd",
              fontSize: "15px", 
              color: "#333",
              outline: "none",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            placeholder="Enter your password"
            required
          />
          {errors.password && (
            <span style={{ color: "#ff6b6b", fontSize: "12px", position: "absolute", bottom: "-18px" }}>
              {errors.password}
            </span>
          )}
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50", 
              color: "white", 
              padding: "12px 24px", 
              border: "none", 
              borderRadius: "6px", 
              fontSize: "16px", 
              cursor: "pointer", 
              transition: "background-color 0.3s",
            }}
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};
