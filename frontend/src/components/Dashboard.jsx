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
        const response = await axios.get("http://localhost:2000/api/user/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        const { username, email, stats } = response.data;

        setUsername(username);
        setUserDetails({ username, email });
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
      fontWeight: "300",
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
      // width:"30%",
      borderRadius: "4px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "30px",
      borderLeft: "2px solid rgb(232, 86, 38)",
      borderBottom: "1px solid rgba(246, 126, 52, 0.98)",
    },
    userInfoTitle: {
      fontSize: "24px",
      fontWeight: "500",
      color: "#ff6347",
      marginBottom: "20px",
    },
    admstyle:{
      color:"red",
      fontWeight:"500",
    },
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.dashboardContent}>
        <h2 style={styles.greeting}>Welcome Back, <span style={styles.admstyle}>{username}!</span> </h2>
        <p style={styles.welcomeMessage}>
          Welcome back! Here’s a quick overview of your account.
        </p>

        <div style={styles.userInfo}>
          <h3 style={styles.userInfoTitle}>User Information</h3>
          <p><strong>Username:</strong> {userDetails.username}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
        </div>
      </div>
    </div>
  );
};
