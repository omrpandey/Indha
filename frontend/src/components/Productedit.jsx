import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./productinsert.css";

export const Productedit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:2000/api/products/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setSelectedImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "tags") {
        //data.append(key, formData[key].split(","));
      } else {
        data.append(key, formData[key]);
      }
    });

    selectedImages.forEach((image) => {
      data.append("images", image);
    });

    try {
      await axios.put(`http://localhost:2000/api/products/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Product updated successfully!");
      setTimeout(() => navigate("/admindashboard/showproduct"), 2000);
    } catch (error) {
      console.error("Error updating product:", error);
      setMessage("Failed to update product. Please try again.");
    }
  };

  return (
    <div className="product-form-container">
      <h2>Edit Product</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="product-form">
        <label>Product Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>

        <label>Price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />

        <label>Discounted Price:</label>
        <input type="number" name="discountedPrice" value={formData.discountedPrice} onChange={handleChange} />

        <label>Discount Percentage:</label>
        <input type="number" name="discountPercentage" value={formData.discountPercentage} onChange={handleChange} />

        <label>Upload New Images:</label>
        <input type="file" multiple onChange={handleImageUpload} accept="image/*" />

        <label>Tags (comma-separated):</label>
        <input type="text" name="tags" value={formData.tags} onChange={handleChange} />

        <label>Rating:</label>
        <input type="number" name="rating" step="0.1" value={formData.rating} onChange={handleChange} />

        <label>Total Reviews:</label>
        <input type="number" name="totalReviews" value={formData.totalReviews} onChange={handleChange} />

        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};
