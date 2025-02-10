import React, { useState, useEffect } from 'react';

function UserPage() {
  const [users, setUsers] = useState([]);

  // Fetch users from MongoDB
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:2000/api/users/logins'); // Removed Authorization header
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Delete user from MongoDB
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:2000/api/user/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(users.filter(user => user._id !== id)); // Remove user from UI
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>User Management</h2>
      <ul style={styles.userList}>
        {users.map((user) => (
          <li key={user._id} style={styles.userItem}>
            <div style={styles.userInfo}>
              <span style={styles.username}>{user.username}</span>
              <span style={styles.email}>{user.email}</span>
            </div>
            <button style={styles.deleteButton} onClick={() => handleDelete(user._id)}>
              <span style={styles.deleteIcon}>🗑️</span> Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(145deg, #6e7dff, #5a64e0)', // Gradient background
  },
  header: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '30px',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  userList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  userItem: {
    backgroundColor: '#f9f9f9',
    margin: '15px 0',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  userItemHover: {
    transform: 'scale(1.02)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  username: {
    fontWeight: '500',
    fontSize: '1.1rem',
    color: '#333',
  },
  email: {
    fontSize: '0.9rem',
    color: '#777',
    marginTop: '5px',
  },
  deleteButton: {
    backgroundColor: '#ff1744',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background-color 0.3s, transform 0.3s',
    display: 'flex',
    alignItems: 'center',
  },
  deleteButtonHover: {
    backgroundColor: '#d50000',
    transform: 'scale(1.05)',
  },
  deleteIcon: {
    marginRight: '10px',
  },
};

export default UserPage;
