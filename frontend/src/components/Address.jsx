import React, { useState } from 'react';
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

  const [submittedData, setSubmittedData] = useState(null); // To store the submitted address
  const [isEditing, setIsEditing] = useState(false); // To track if editing mode is active

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:2000/api/addresses", formData);
      console.log('Address saved:', response.data);

      // Clear the form fields after submission
      setFormData({
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

      // Store the submitted data
      setSubmittedData(response.data.address); // Assuming the API response has the saved address under `address`
      setIsEditing(false); // Ensure editing mode is off
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  // Handle Edit Button
  const handleEdit = () => {
    setFormData(submittedData); // Pre-fill the form with the submitted data
    setIsEditing(true); // Enable editing mode
  };

  // Handle Update Submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:2000/api/addresses/${submittedData._id}`, formData);
      console.log('Updated address response:', response.data);
  
      // Update the state with the updated address
      setSubmittedData(response.data); // Use response.data directly
  
      // Clear form and exit editing mode
      setFormData({
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
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating address:', error);
    }
  };
  

  return (
    <div className="form-container">
      <h2 className="form-h2">{isEditing ? "Edit Address" : "User Information Form"}</h2>
      <form onSubmit={isEditing ? handleUpdate : handleSubmit} className="form">
        <div>
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="companyName" className="form-label">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="country" className="form-label">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="streetAddress" className="form-label">Street Address:</label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="city" className="form-label">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="stateOrCountry" className="form-label">State/Province:</label>
          <input
            type="text"
            id="stateOrCountry"
            name="stateOrCountry"
            value={formData.stateOrCountry}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="pincode" className="form-label">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
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
          <button className="form-button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};
