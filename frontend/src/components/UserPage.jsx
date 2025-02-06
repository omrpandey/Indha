import React, { useState } from 'react';

function UserPage() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleAdd = () => {
    const newUser = { id: users.length + 1, name: 'New User', email: 'newuser@example.com' };
    setUsers([...users, newUser]);
  };

  // Inline styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff3e0', // Light orange background
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
      color: '#ff9800', // Orange color for the header
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#ff9800', // Orange background for buttons
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginBottom: '20px',
    },
    userList: {
      listStyleType: 'none',
      padding: '0',
    },
    userItem: {
      backgroundColor: 'white',
      margin: '10px 0',
      padding: '15px',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    deleteButton: {
      backgroundColor: '#e53935', // Red color for delete button
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '3px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Users</h2>

      <ul style={styles.userList}>
        {users.map((user) => (
          <li key={user.id} style={styles.userItem}>
            <span>{user.name} - {user.email}</span>
            <button style={styles.deleteButton} onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;