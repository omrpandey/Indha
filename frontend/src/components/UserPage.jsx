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
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#fff3e0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#ff9800', textAlign: 'center' }}>Users</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {users.map((user) => (
          <li key={user._id} style={{ backgroundColor: 'white', margin: '10px 0', padding: '15px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <span>{user.username} - {user.email}</span>
            <button style={{ backgroundColor: '#e53935', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }} onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
