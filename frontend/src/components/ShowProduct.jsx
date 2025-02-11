import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus, FaBoxOpen } from 'react-icons/fa';

function ShowProduct() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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
      <div style={styles.headerContainer}>
        <h2 style={styles.header}>Product Inventory</h2>
        <NavLink to="/admindashboard/productinsert" style={styles.addButton}>
          <FaPlus style={styles.addIcon} />
          Add Product
        </NavLink>
      </div>

      {products.length === 0 ? (
        <div style={styles.emptyState}>
          <FaBoxOpen style={styles.emptyIcon} />
          <p>No products found in inventory</p>
        </div>
      ) : (
        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product._id} style={styles.card}>
              <div style={styles.cardContent}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productPrice}>₹{product.price}</p>
                {product.description && (
                  <p style={styles.productDescription}>{product.description}</p>
                )}
              </div>
              <div style={styles.buttonGroup}>
                <button 
                  style={styles.editButton} 
                  onClick={() => navigate(`/admindashboard/productedit/${product._id}`)}
                >
                  <FaEdit style={styles.buttonIcon} />
                  Edit
                </button>
                <button 
                  style={styles.deleteButton} 
                  onClick={() => handleDelete(product._id)}
                >
                  <FaTrash style={styles.buttonIcon} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    // margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    borderBottom:"1px solid rgba(10, 10, 10, 0.19)",
    paddingBottom:"20px",
  },
  header: {
    fontSize: '2rem',
    color: '#2d3436',
    margin: 0,
    fontWeight: '400',
    fontFamily:"cursive",
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.8rem 1.5rem',
    backgroundColor: 'rgb(255, 80, 80)',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#00a383',
      transform: 'translateY(-2px)',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
  
    padding: '1.5rem',
    boxShadow: '2px 5px 14px 16px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    },
  },
  cardContent: {
    marginBottom: '1.5rem',
  
  },
  productName: {
    height:"90px",
    overflow:"hidden",

    fontFamily:"Cursive",
    fontSize: '1.25rem',
    fontWeight: '300',
    color: '#2d3436',
    margin: '0 0 0.5rem 0',
  },
  productPrice: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: 'rgb(255, 80, 80)',
    margin: '0 0 1rem 0',
  },
  productDescription: {
    height:"180px",
    overflow:"hidden",
    fontSize: '0.9rem',
    color: '#636e72',
    margin: 0,
    lineHeight: '1.5',
  },
  buttonGroup: {
    display: 'flex',
    gap: '0.8rem',
  },
  editButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1rem',
    backgroundColor: '#0984e3',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#0873c4',
    },
  },
  deleteButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1rem',
    backgroundColor: '#d63031',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#c0292a',
    },
  },
  buttonIcon: {
    fontSize: '1rem',
  },
  addIcon: {
    fontSize: '1rem',
  },
  emptyState: {
    textAlign: 'center',
    padding: '4rem',
    color: '#636e72',
  },
  emptyIcon: {
    fontSize: '4rem',
    color: '#b2bec3',
    marginBottom: '1rem',
    animation: 'float 3s ease-in-out infinite',
  },
};

// Add global animations
const globalStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
`;

// Add the global styles component
<style>{globalStyles}</style>

export default ShowProduct;