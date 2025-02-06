import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

function ShowProduct() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from MongoDB
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:2000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:2000/api/products/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProducts(products.filter(product => product._id !== id));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Products</h2>
      <NavLink to="/admindashboard/productinsert" style={styles.addButton}>Add Product</NavLink>
      <ul style={styles.productList}>
        {products.map((product) => (
          <li key={product._id} style={styles.productCard}>
            <span style={styles.productInfo}>{product.name} - ₹{product.price}</span>
            <span style={styles.gap}>
              <button style={styles.editButton} onClick={() => navigate(`/admindashboard/productedit/${product._id}`)}>Edit</button>
              <button style={styles.deleteButton} onClick={() => handleDelete(product._id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  gap: { display: "flex", gap: "10px" },
  container: { fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' },
  header: { color: '#B71C1C', textAlign: 'center', fontSize: '2rem', marginBottom: '20px' },
  addButton: { backgroundColor: '#FF5722', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px', display: 'block', width: '100%', fontSize: '1.1rem' },
  productList: { listStyleType: 'none', padding: '0', margin: '0' },
  productCard: { backgroundColor: '#fff3e0', marginBottom: '15px', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.1rem' },
  productInfo: { fontWeight: 'bold', color: '#333' },
  editButton: { backgroundColor: '#0288D1', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontSize: '0.9rem' },
  deleteButton: { backgroundColor: '#E53935', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontSize: '0.9rem' },
};

export default ShowProduct;
