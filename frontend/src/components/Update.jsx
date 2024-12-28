import React, { useState } from "react";

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
      console.log("Profile updated:", formData);
      alert("Profile updated successfully!");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "550px", // Reduced max-width
        margin: "30px auto", // Reduced margin
        padding: "40px", // Reduced padding
        backgroundColor: "#f7f9fc",
        borderRadius: "10px", // Slightly smaller radius
        boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)", // Softer shadow
        fontFamily: "'Roboto', sans-serif",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontFamily: "cursive",
          fontWeight: "500",
          textAlign: "center",
          marginBottom: "20px", // Reduced margin
          color: "#333",
          fontSize: "28px", // Slightly smaller font size
          letterSpacing: "0.5px",
        }}
      >
        Update Your Profile
      </h2>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginBottom: "20px", // Reduced bottom margin
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <label
            htmlFor="username"
            style={{
              marginBottom: "6px", // Reduced margin
              fontSize: "15px",
              fontWeight: "500",
              color: "#5a5a5a",
            }}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{
              padding: "12px", // Reduced padding
              borderRadius: "6px", // Slightly smaller border radius
              border: "1px solid #ddd",
              fontSize: "15px", // Slightly smaller font size
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

        <div
          style={{
            marginBottom: "20px", // Reduced bottom margin
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <label
            htmlFor="email"
            style={{
              marginBottom: "6px", // Reduced margin
              fontSize: "15px",
              fontWeight: "500",
              color: "#5a5a5a",
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: "12px", // Reduced padding
              borderRadius: "6px", // Slightly smaller border radius
              border: "1px solid #ddd",
              fontSize: "15px", // Slightly smaller font size
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

        <div
          style={{
            marginBottom: "20px", // Reduced bottom margin
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <label
            htmlFor="password"
            style={{
              marginBottom: "6px", // Reduced margin
              fontSize: "15px",
              fontWeight: "500",
              color: "#5a5a5a",
            }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              padding: "12px", // Reduced padding
              borderRadius: "6px", // Slightly smaller border radius
              border: "1px solid #ddd",
              fontSize: "15px", // Slightly smaller font size
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
              padding: "12px 28px", // Reduced padding
              backgroundColor: "orange",
              color: "#fff",
              borderRadius: "30px", // Pill shape with smaller border radius
              border: "none",
              fontSize: "15px", // Slightly smaller font size
              fontWeight: "600",
              cursor: "pointer",
              width: "100%",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
           
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};
