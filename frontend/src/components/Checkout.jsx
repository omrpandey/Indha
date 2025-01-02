import React, { useState } from "react";

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
        ...data,
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

    if (name === "firstName" && value.trim() !== "") {
      fetchAddress(value.trim());
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName) {
      alert("Please enter a first name to fetch the address!");
      return;
    }

    try {
      const response = await fetch("http://localhost:2000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(`Failed to submit the order: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting the order:", error);
      alert("There was an error submitting your order. Please try again.");
    }
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
        {/* The rest of the input fields */}
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
        {/* Repeat similar fields for other properties */}
        <button type="submit" style={buttonStyle}>
          Order on this address
        </button>
      </form>
    </div>
  );
};
