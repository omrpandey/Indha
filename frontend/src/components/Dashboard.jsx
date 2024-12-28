import React, { useState, useEffect } from "react";

export const Dashboard = () => {
  // Simulating user data
  const [username, setUsername] = useState("Alice Cooper");
  const [userDetails, setUserDetails] = useState({
    email: "alice@ecommerce.com",
    phone: "+1234567890",
    address: "1234 Market Street, Cityville",
  });

  const [userStats, setUserStats] = useState({
    totalOrders: 20,
    wishlistItems: 7,
    orderHistory: [
      { id: 1, date: "2024-12-01", status: "Shipped", amount: "$120" },
      { id: 2, date: "2024-11-15", status: "Delivered", amount: "$80" },
    ],
  });

  useEffect(() => {
    // Simulating fetching user data (can be replaced with API call)
    setUsername("Alice Cooper");
    setUserDetails({
      email: "alice@ecommerce.com",
      phone: "+1234567890",
      address: "1234 Market Street, Cityville",
    });
    setUserStats({
      totalOrders: 20,
      wishlistItems: 7,
      orderHistory: [
        { id: 1, date: "2024-12-01", status: "Shipped", amount: "$120" },
        { id: 2, date: "2024-11-15", status: "Delivered", amount: "$80" },
      ],
    });
  }, []);

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

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.dashboardContent}>
       
        <p style={styles.welcomeMessage}>
          Welcome back! Here’s a quick overview of your account.
        </p>

        {/* User Basic Info */}
        <div style={styles.userInfo}>
          <h3 style={styles.userInfoTitle}>User Information</h3>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
          <p><strong>Address:</strong> {userDetails.address}</p>
        </div>

        {/* User Stats */}
        <div style={styles.userStats}>
          {/* Total Orders */}
          <div style={styles.statsCard}>
            <h3 style={styles.statsCardTitle}>Cart Count</h3>
            <h4 style={styles.statsCardAmount}>{userStats.totalOrders}</h4>
          </div>

          {/* Wishlist Items */}
          <div style={styles.statsCard}>
            <h3 style={styles.statsCardTitle}>Wishlist Items</h3>
            <h4 style={styles.statsCardAmount}>{userStats.wishlistItems}</h4>
          </div>
        </div>

        {/* Order History */}
        <div style={styles.orderHistory}>
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
        </div>
      </div>
    </div>
  );
};
