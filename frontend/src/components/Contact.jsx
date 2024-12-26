import React, { useState } from "react";
import "./contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option1: "",
    option2: "",
    telephone: "",
    subject: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    if (!formData.option1.trim()) errors.option1 = "Option 1 is required.";
    if (!formData.option2.trim()) errors.option2 = "Option 2 is required.";
    if (!formData.telephone.trim()) errors.telephone = "Telephone is required.";
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.comments.trim()) errors.comments = "Comments are required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:2000/api/contact/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            priority: formData.option1,
            department: formData.option2,
            telephone: formData.telephone,
            subject: formData.subject,
            comment: formData.comments,
          }),
        });
  
        if (response.ok) {
          alert('Your message has been sent successfully!');
          setFormData({
            name: "",
            email: "",
            option1: "",
            option2: "",
            telephone: "",
            subject: "",
            comments: "",
          });
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      setErrors(validationErrors);
    }
  };
  
  return (
    <div className="contact-container">
      <div className="form-section">
        <h2>
          <span className="c">C</span>ontact <span className="und">Us</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
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
            <label>Option 1 </label>
            <select
              name="option1"
              value={formData.option1}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Low">Low</option>
              <option value="High">High</option>
            </select>
            {errors.option1 && <p className="error">{errors.option1}</p>}
          </div>

          <div className="form-group">
            <label>Option 2</label>
            <select
              name="option2"
              value={formData.option2}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Sales Support">Sales Support</option>
              <option value="B2B Enquiry">B2B Enquiry</option>
            </select>
            {errors.option2 && <p className="error">{errors.option2}</p>}
          </div>

          <div className="form-group">
            <label>Telephone</label>
            <input
              type="text"
              name="telephone"
              placeholder="Enter your telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
            {errors.telephone && <p className="error">{errors.telephone}</p>}
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
            <label>Comments</label>
            <textarea
              name="comments"
              rows="4"
              placeholder="Enter your comments"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
            {errors.comments && <p className="error">{errors.comments}</p>}
          </div>

          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>

      <div className="map-section">
        <iframe
          title="Chembur Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60355.47865589116!2d72.87554958789062!3d19.06469430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8cf25c20d63%3A0x58a1ae847520431d!2sChembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1700450736733!5m2!1sen!2sin"
          width="100%"
          height="50%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
