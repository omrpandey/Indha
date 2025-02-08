import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Checkout = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    city: "",
    stateOrCountry: "",
    pincode: "",
    phoneNumber: "",
    email: "",
    products: [], // Assuming products are added elsewhere'
    TAmount: 0, // Assuming total amount is calculated elsewhere
  });

  const [submitted, setSubmitted] = useState(false);

  
  // Fetch cart data from the API when the component mounts
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartResponse = await axios.get("http://localhost:2000/api/cart");
        const cartData = cartResponse.data.cart.products.map((product) => ({
          ...product,
          quantity: product.quantity || 1,
        }));
        setCartProducts(cartData);
  
        const cartTotal = cartData.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        );
  
        // Update both `TAmount` and `products` in `formData`
        setFormData((prevData) => ({
          ...prevData,
          TAmount: cartTotal,
          products: cartData, // Fix: Add products to formData
        }));
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
  
    fetchCart();
  }, []);
  
  
  

  // Function to fetch address by firstName
  const fetchAddress = async (firstName) => {
    try {
      const response = await fetch(`http://localhost:2000/api/addresses/${firstName}`);
      if (!response.ok) {
        throw new Error("Address not found");
      }
      const data = await response.json();
      console.log("Fetched Address:", data);
      setFormData((prevData) => ({
        ...prevData,
        ...data, // Spreading the fetched data into formData
      }));
    } catch (error) {
      console.error("Error fetching address:", error);
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

    console.log("Submitting Order Data:", formData);

    if (!formData.firstName) {
      alert("Please enter a first name to fetch the address!");
      return;
    }

    try {
      const orderData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        country: formData.country,
        street: formData.streetAddress,
        town: formData.city,
        state: formData.stateOrCountry,
        pincode: formData.pincode,
        phoneNo: formData.phoneNumber,
        email: formData.email,
        products: formData.products,
        totalAmount: formData.TAmount,
      };

      const response = await fetch("http://localhost:2000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const responseData = await response.json();
      console.log("Order Response:", responseData);

      if (response.ok) {
        setSubmitted(true);
        navigate("/admin/payment");
      } else {
        alert(`Failed to submit the order: ${responseData.message}`);
      }
    } catch (error) {
      console.error("Error submitting the order:", error);
    }
  };

  // Styling
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
          <label style={labelStyle}>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            style={inputStyle}
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
            required
          />
        </div>
        <div>
          <label style={labelStyle}>Street Address:</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div>
          <label style={labelStyle}>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div>
          <label style={labelStyle}>State or Country:</label>
          <input
            type="text"
            name="stateOrCountry"
            value={formData.stateOrCountry}
            onChange={handleChange}
            style={inputStyle}
            required
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
            required
          />
        </div>
        <div>
          <label style={labelStyle}>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Order on this address
        </button>
      </form>
    </div>
  );
};
