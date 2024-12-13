import React, { useState } from "react";

export const Product= () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discountedPrice: "",
    discountPercentage: "",
    images: [], // Stores image files
    tags: [""],
    rating: 0,
    totalReviews: 0,
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to Array
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const handleTagChange = (index, value) => {
    const updatedTags = [...formData.tags];
    updatedTags[index] = value;
    setFormData((prev) => ({ ...prev, tags: updatedTags }));
  };

  const handleAddTagField = () => {
    setFormData((prev) => ({ ...prev, tags: [...prev.tags, ""] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      images: formData.images.map((file) => file.name), // Map file objects to names for now
    };
    console.log("Submitted Data:", submissionData);

    alert("Product submitted successfully!");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        background: "#f9f9f9",
      }}
    >
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Discounted Price:</label>
          <input
            type="number"
            name="discountedPrice"
            value={formData.discountedPrice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Discount Percentage:</label>
          <input
            type="number"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Upload Images:</label>
          <input type="file" multiple accept="image/*" onChange={handleImageChange} />
          <div style={{ marginTop: "10px" }}>
            {formData.images.map((file, index) => (
              <div key={index} style={{ marginBottom: "5px" }}>
                {file.name}
              </div>
            ))}
          </div>
        </div>
        <div>
          <label>Tags:</label>
          {formData.tags.map((tag, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder={`Tag ${index + 1}`}
                value={tag}
                onChange={(e) => handleTagChange(index, e.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddTagField} style={{ marginTop: "10px" }}>
            Add Tag
          </button>
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
          />
        </div>
        <div>
          <label>Total Reviews:</label>
          <input
            type="number"
            name="totalReviews"
            value={formData.totalReviews}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};


