import React, { useState } from "react";
import "./contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      alert("Your message has been sent successfully!");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-container">
      <div className="form-section">
        <h2><span className="c">C</span>ontact <span className="und">Us</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="error">{errors.subject}</p>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>

      <div className="map-section">
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991446554!2d-74.25987568709378!3d40.69767006311745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjgiTiA3NMKwMTUnNTYuOSJX!5e0!3m2!1sen!2sus!4v1627917086827!5m2!1sen!2sus"
          width="100%"
          height="550px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

