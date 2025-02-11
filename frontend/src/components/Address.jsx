import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './adress.css';

export const Address = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    city: '',
    stateOrCountry: '',
    pincode: '',
    phoneNumber: '',
    email: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const userToken = localStorage.getItem("token");

  // Fetch Address on Component Mount
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/addresses", {
          headers: { authorization: `Bearer ${userToken}` },
        });

        if (response.data && response.data.address) {
          setSubmittedData(response.data.address);
          setFormData(response.data.address); // Prefill the form
        }
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    };

    if (userToken) {
      fetchAddress();
    }
  }, [userToken]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (Save New Address)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:2000/api/addresses", formData, {
        headers: { authorization: `Bearer ${userToken}` },
      });

      console.log('Address saved:', response.data);
      setSubmittedData(response.data.address);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  // Handle Edit Button
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle Update Submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:2000/api/addresses/${submittedData._id}`, formData, {
        headers: { authorization: `Bearer ${userToken}` },
      });

      console.log('Updated address response:', response.data);
      setSubmittedData(response.data.address || response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating address:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>{isEditing ? "Edit Address" : "Set Your Address"}</h2>
      <form onSubmit={isEditing ? handleUpdate : handleSubmit} className="form">
        <div>
          <label className="form-label">First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input" required />
        </div>
        <div>
          <label className="form-label">Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input" required />
        </div>
        <div>
          <label className="form-label">Company Name:</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Country:</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} className="form-input" required />
        </div>
        <div>
          <label className="form-label">Street Address:</label>
          <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} className="form-input" required />
        </div>
        <div>
          <label className="form-label">City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-input" required />
        </div>
        <div>
          <label className="form-label">State/Province:</label>
          <input type="text" name="stateOrCountry" value={formData.stateOrCountry} onChange={handleChange} className="form-input" required />
        </div>
        <div>
          <label className="form-label">Pincode:</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="form-input" required />
        </div>
        <div>
          <label className="form-label">Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-input" required />
        </div>
        <div>
          <label className="form-label">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
        </div>
        <button type="submit" className="form-button">
          {isEditing ? "Update" : "Save"}
        </button>
      </form>

      {/* Display Submitted Data */}
      {submittedData && !isEditing && (
        <div className="submitted-data">
          <h3>Submitted Address:</h3>
          <p><strong>First Name:</strong> {submittedData.firstName}</p>
          <p><strong>Last Name:</strong> {submittedData.lastName}</p>
          <p><strong>Company Name:</strong> {submittedData.companyName}</p>
          <p><strong>Country:</strong> {submittedData.country}</p>
          <p><strong>Street Address:</strong> {submittedData.streetAddress}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>State/Province:</strong> {submittedData.stateOrCountry}</p>
          <p><strong>Pincode:</strong> {submittedData.pincode}</p>
          <p><strong>Phone Number:</strong> {submittedData.phoneNumber}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <button className="form-button" onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};
