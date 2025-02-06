import React from 'react';

function admHeader() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Admin Panel</h1>
      <p style={styles.description}>Manage and monitor your system with ease. Access user data, products, and more.</p>
      <div style={styles.actions}>
        <button style={styles.button}>Dashboard</button>
        <button style={styles.button}>Settings</button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    padding: '30px 20px',
    backgroundColor: '#d32f2f', // Red background color
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)', // Adding subtle shadow for depth
    borderBottom: '5px solid #b71c1c', // Darker red border for separation
  },
  title: {
    fontSize: '3rem', // Increased font size for prominence
    fontWeight: '700', // Bold text
    letterSpacing: '1.5px', // Increased letter spacing for modern look
    margin: '0 0 10px 0',
  },
  description: {
    fontSize: '1.1rem', // A smaller font for the description
    color: '#f1f1f1', // Slightly lighter text for description
    margin: '0 0 20px 0',
    fontStyle: 'italic', // Italic style for a softer look
  },
  actions: {
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#e57373', // Lighter red background for buttons
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 10px',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#f44336', // Darker red on hover
  },
};

export default admHeader;