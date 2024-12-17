import React, { useState } from "react";
import axios from "axios";
import "./productinsert.css";

export const Productinsert= () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discountedPrice: "",
    discountPercentage: "",
    images: [],
    tags: "",
    rating: "",
    totalReviews: "",
    category: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setSelectedImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object for file upload
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "tags") {
        data.append(key, formData[key].split(",")); // Convert comma-separated tags into an array
      } else {
        data.append(key, formData[key]);
      }
    });

    selectedImages.forEach((image) => {
      data.append("images", image);
    });

    try {
      const response = await axios.post(
        "http://localhost:2000/api/products",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMessage("Product added successfully!");
      setFormData({
        name: "",
        description: "",
        price: "",
        discountedPrice: "",
        discountPercentage: "",
        images: [],
        tags: "",
        rating: "",
        totalReviews: "",
        category: "",
      });
      setSelectedImages([]);
    } catch (error) {
      console.error("Error adding product:", error);
      setMessage("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add a New Product</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="product-form">
        {/* Name */}
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Description */}
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        {/* Price */}
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        {/* Discounted Price */}
        <label>Discounted Price:</label>
        <input
          type="number"
          name="discountedPrice"
          value={formData.discountedPrice}
          onChange={handleChange}
        />

        {/* Discount Percentage */}
        <label>Discount Percentage:</label>
        <input
          type="number"
          name="discountPercentage"
          value={formData.discountPercentage}
          onChange={handleChange}
        />

        {/* Images */}
        <label>Upload Images:</label>
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          accept="image/*"
        />

        {/* Tags */}
        <label>Tags (comma-separated):</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
        />

        {/* Rating */}
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          step="0.1"
          value={formData.rating}
          onChange={handleChange}
        />

        {/* Total Reviews */}
        <label>Total Reviews:</label>
        <input
          type="number"
          name="totalReviews"
          value={formData.totalReviews}
          onChange={handleChange}
        />

        {/* Category */}
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};
