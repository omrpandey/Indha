import React, { useState, useEffect } from "react";

export const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    street: "",
    town: "",
    state: "",
    pincode: "",
    phoneNo: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Function to fetch address by firstName
  const fetchAddress = async (firstName) => {
    try {
      const response = await fetch(`http://localhost:2000/api/addresses/${firstName}`);
      if (!response.ok) {
        throw new Error("Address not found");
      }
      const data = await response.json();
      setFormData((prevData) => ({
        ...prevData,
        ...data, // Populate form fields with the fetched address data
      }));
    } catch (error) {
      console.error("Error fetching address:", error);
      alert("Could not fetch address. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Fetch address when firstName is updated
    if (name === "firstName" && value.trim() !== "") {
      fetchAddress(value.trim());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName) {
      alert("Please enter a first name to fetch the address!");
      return;
    }
    setSubmitted(true);
    console.log("Order Details:", formData);
  };

  // Styles (unchanged)
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "20px auto",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    marginBottom: "15px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "red",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  if (submitted) {
    return (
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center", color: "#28a745" }}>
          Order Submitted Successfully!
        </h2>
        <p style={{ textAlign: "center", color: "#333" }}>
          Thank you for placing your order.
        </p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Fetch and Fill Address
      </h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label style={labelStyle}>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div>
          <label style={labelStyle}>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={inputStyle}
            disabled
          />
        </div>
        <div>
          <label style={labelStyle}>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={inputStyle}
            disabled
          />
        </div>
        <div>
          <label style={labelStyle}>Street:</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            style={inputStyle}
            disabled
          />
        </div>
        <div>
          <label style={labelStyle}>Town:</label>
          <input
            type="text"
            name="town"
            value={formData.town}
            onChange={handleChange}
            style={inputStyle}
            disabled
          />
        </div>
        <div>
          <label style={labelStyle}>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            style={inputStyle}
            disabled
          />
        </div>
        <div>
          <label style={labelStyle}>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            style={inputStyle}
            disabled
          />
        </div>
        <div>
          <label style={labelStyle}>Phone Number:</label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            style={inputStyle}
            disabled
          />
        </div>
        <div>
          <label style={labelStyle}>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            disabled
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Fetch Address
        </button>
      </form>
    </div>
  );
};
