import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import "./admdash.css";

export const AdmDash = () => {
  const [users] = useState([
    { _id: "1", name: "John Doe", email: "john@example.com" },
    { _id: "2", name: "Jane Smith", email: "jane@example.com" },
  ]);

  const [products, setProducts] = useState([
    { _id: "101", name: "Product A", price: "20" },
    { _id: "102", name: "Product B", price: "35" },
  ]);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      
      {/* User Details */}
      <div className="section user-section">
        <h2>All Users</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Product Management */}
      <div className="section product-section">
        <h2>Manage Products</h2>
        <NavLink to ="/productinsert" className="add-button" >
          <FaPlus /> Add Product
        </NavLink>
        <h3>Existing Products</h3>
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <button className="edit-button">
                    <FaEdit /> Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteProduct(product._id)}>
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
