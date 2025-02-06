import React, { useState } from 'react';
import {NavLink} from "react-router-dom"

function ShowProduct() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' }
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleAdd = () => {
    const newProduct = { id: products.length + 1, name: 'New Product', price: '$30' };
    setProducts([...products, newProduct]);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Products</h2>
      <NavLink to ="/admindashboard/productinsert" style={styles.addButton} >Add Product</NavLink>
      <ul style={styles.productList}>
        {products.map((product) => (
          <li key={product.id} style={styles.productCard}>
            <span style={styles.productInfo}>{product.name} - {product.price}</span>
           <span style={styles.gap}> <button style={styles.deleteButton} onClick={() => handleDelete(product.id)}>Edit</button>
           <button style={styles.deleteButton} onClick={() => handleDelete(product.id)}>Delete</button></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
    gap:{
        display:"flex",
        gap:"10px"

    },
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#B71C1C', // Dark red
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  addButton: {
    backgroundColor: '#FF5722', // Red-orange color
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
    display: 'block',
    width: '100%',
    fontSize: '1.1rem',
    transition: 'background-color 0.3s ease',
  },
  addButtonHover: {
    backgroundColor: '#E64A19',
  },
  productList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  productCard: {
    backgroundColor: '#fff3e0', // Light orange
    marginBottom: '15px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.1rem',
  },
  productInfo: {
    fontWeight: 'bold',
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#E53935', // Red color for delete
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'background-color 0.3s ease',
  },
  deleteButtonHover: {
    backgroundColor: '#D32F2F',
  },
};

export default ShowProduct;