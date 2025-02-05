import React, { useState, useEffect } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [userStats, setUserStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get("http://localhost:2000/api/user/profile", {
          headers: {
            authorization: `Bearer ${token}`, // Replace with your token retrieval logic
          },
        });

        const { username, email, phonenumber, address, stats } = response.data;

        setUsername(username);
        setUserDetails({ username, email, phonenumber, address });
        setUserStats(stats);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  const styles = {
    dashboardContainer: {
      fontFamily: "Cursive",
      padding: "30px",
      backgroundColor: "#f5f7fb",
      height: "100vh",
    },
    dashboardContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      backgroundColor: "#fff",
      borderRadius: "15px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
      padding: "30px",
    },
    greeting: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#333",
      marginBottom: "20px",
    },
    welcomeMessage: {
      fontSize: "16px",
      color: "#666",
      marginBottom: "30px",
      fontWeight: "400",
    },
    userInfo: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "30px",
      borderLeft: "4px solid #4caf50",
    },
    userInfoTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#ff6347", // Tomato color
      marginBottom: "20px",
    },
    userStats: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
      marginBottom: "40px",
    },
    statsCard: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    statsCardTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#4682b4", // SteelBlue color
      marginBottom: "20px",
    },
    statsCardAmount: {
      fontSize: "22px",
      color: "#4caf50",
    },
    orderHistory: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "40px",
    },
    orderHistoryTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#ffa500", // Orange color
      marginBottom: "20px",
    },
    orderItem: {
      marginBottom: "15px",
      padding: "15px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    orderItemDetails: {
      margin: "5px 0",
    },
    orderItemTitle: {
      color: "#333",
    },
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.dashboardContent}>
        <h2 style={styles.greeting}>Hello, {username}!</h2>
        <p style={styles.welcomeMessage}>
          Welcome back! Here’s a quick overview of your account.
        </p>

        {/* User Basic Info */}
        <div style={styles.userInfo}>
          <h3 style={styles.userInfoTitle}>User Information</h3>
          <p><strong>Username:</strong> {userDetails.username}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
          <p><strong>Address:</strong> {userDetails.address}</p>
        </div>

        {/* User Stats */}
        {/* <div style={styles.userStats}>
          <div style={styles.statsCard}>
            <h3 style={styles.statsCardTitle}>Total Orders</h3>
            <h4 style={styles.statsCardAmount}>{userStats.totalOrders}</h4>
          </div>
          <div style={styles.statsCard}>
            <h3 style={styles.statsCardTitle}>Wishlist Items</h3>
            <h4 style={styles.statsCardAmount}>{userStats.wishlistItems}</h4>
          </div>
        </div> */}

        {/* Order History */}
        {/* <div style={styles.orderHistory}>
          <h3 style={styles.orderHistoryTitle}>Order History</h3>
          <ul>
            {userStats.orderHistory.map((order) => (
              <li key={order.id} style={styles.orderItem}>
                <p style={styles.orderItemDetails}>
                  <strong style={styles.orderItemTitle}>Order ID:</strong> {order.id}
                </p>
                <p style={styles.orderItemDetails}>
                  <strong style={styles.orderItemTitle}>Date:</strong> {order.date}
                </p>
                <p style={styles.orderItemDetails}>
                  <strong style={styles.orderItemTitle}>Status:</strong> {order.status}
                </p>
                <p style={styles.orderItemDetails}>
                  <strong style={styles.orderItemTitle}>Amount:</strong> {order.amount}
                </p>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};
