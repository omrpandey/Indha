import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FiUser,
  FiHome,
  FiMapPin,
  FiGlobe,
  FiSmartphone,
  FiMail,
  FiShoppingCart,
  FiBriefcase,
  FiHash
} from "react-icons/fi";
import "./Checkout.css";

export const Checkout = () => {
  // ... (keep all the existing useState and useEffect code)
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

  return (
    <div className="checkout-container">
      <h3 className="form-title">
       
        <span>Checkout Details</span>
        <span className="Check_line"></span>
      </h3>
    
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label className="form-label">
            <FiUser /> First Name:
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <FiUser /> Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            disabled
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <FiBriefcase /> Company Name:
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <FiGlobe /> Country:
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <FiHome /> Street Address:
          </label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <FiMapPin /> City:
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <FiGlobe /> State/Country:
          </label>
          <input
            type="text"
            name="stateOrCountry"
            value={formData.stateOrCountry}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <FiHash /> Pincode:
          </label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <FiSmartphone /> Phone Number:
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <FiMail /> Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          <FiShoppingCart className="ico_check"/> 
          <span className="ico_btn">Place Order Now!!</span>
        </button>
      </form>

      {submitted && (
        <div className="success-message">
          <h2>Order Submitted Successfully! 🎉</h2>
          <p>Thank you for placing your order.</p>
        </div>
      )}
    </div>
  );
};