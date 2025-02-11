import { color } from 'framer-motion';
import React, { useState, useEffect } from 'react';

function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:2000/api/users/logins');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:2000/api/user/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(users.filter(user => user._id !== id));
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>👥 User Galaxy</h2>
      
      {users.length === 0 ? (
        <div style={styles.emptyState}>
          <div style={styles.astronaut}>🚀</div>
          <p style={{color:"black"}}>No users found in the cosmos!</p>
        </div>
      ) : (
        <div style={styles.grid}>
          {users.map((user) => (
            <div key={user._id} style={styles.card}>
              <div style={styles.cardContent}>
                <div style={styles.avatar}>
                  {user.username[0].toUpperCase()}
                </div>
                <div style={styles.userInfo}>
                  <h3 style={styles.username}>{user.username}</h3>
                  <p style={styles.email}>{user.email}</p>
                </div>
              </div>
              <button 
                style={styles.deleteButton} 
                onClick={() => handleDelete(user._id)}
              >
                <svg
                  style={styles.trashIcon}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
                </svg>
                Remove Explorer
              </button>
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
    // background: 'radial-gradient(circle at top, #1a1a2e, #16213e)',
    borderRadius: '10px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.3)',
    color: '#fff',
    minHeight: '80vh',
  },
  header: {
    fontSize: "28px", // Increased font size
    fontWeight: "bold", // Make it bold
    textAlign: "center", // Center align
    color: "#333", // Dark gray color for better contrast
    marginBottom: "20px", // Add spacing
    fontFamily:"cursive",// A modern font
    // borderBottom:"1px solid black",
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
    borderTop:"1px solid rgba(10, 10, 10, 0.17)",
  },
  card: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '1.5rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    },
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #48abe0, #0077b6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginRight: '1rem',
  },
  userInfo: {
    flexGrow: 1,
  },
  username: {
    margin: '0',
    fontSize: '1.2rem',
    fontWeight: '600',
    color:"rgba(10, 10, 10, 0.83)",
    letterSpacing: '0.5px',
    fontFamily:"cursive",
    // paddingBottom:"2px",
  },
  email: {
    margin: '0',
    fontSize: '0.9rem',
    color: 'rgb(63, 159, 250)',
    fontFamily:"cursive",
  },
  deleteButton: {
    width: '100%',
    padding: '0.8rem',
    background: 'linear-gradient(45deg, #ff6b6b, #ff5252)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    ':hover': {
      background: 'linear-gradient(45deg, #ff5252, #ff6b6b)',
      transform: 'scale(1.02)',
    },
  },
  trashIcon: {
    width: '20px',
    height: '20px',
  },
  emptyState: {
    textAlign: 'center',
    padding: '3rem',
    opacity: '0.8',
  },
  astronaut: {
    fontSize: '4rem',
    marginBottom: '1rem',
    animation: 'float 3s ease-in-out infinite',
  },
};

// Add these global animations
const globalStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
`;

// Add the global styles component
<style>{globalStyles}</style>

export default UserPage;