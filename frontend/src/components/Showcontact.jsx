import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaExclamationCircle,
  FaBuilding,
  FaPhone,
  FaComment,
  FaClock
} from "react-icons/fa";
import { color } from "framer-motion";

const Showcontact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/contact/all");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  // Function to determine priority styles
  const getPriorityStyle = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return styles.priorityHigh;
      case "medium":
        return styles.priorityMedium;
      case "low":
        return styles.priorityLow;
      default:
        return {};
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        <FaComment style={styles.headerIcon} /> Contact Requests
      </h2>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>Name</th>
              <th style={styles.th}> Email</th>
              <th style={styles.th}> Priority</th>
              <th style={styles.th}> Department</th>
              <th style={styles.th}>Telephone</th>
              <th style={styles.th}>Subject</th>
              <th style={styles.th}>Comment</th>
              <th style={styles.th}> Submitted</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <tr key={index} style={styles.tableRow}>
                  <td style={styles.td}>{contact.name}</td>
                  <td style={styles.td}>
                    <a href={`mailto:${contact.email}`} style={styles.emailLink}>
                      {contact.email}
                    </a>
                  </td>
                  <td style={{ ...styles.td, ...getPriorityStyle(contact.priority) }}>
                    {contact.priority}
                  </td>
                  <td style={styles.td}>{contact.department}</td>
                  <td style={styles.td}>{contact.telephone}</td>
                  <td style={styles.td}>{contact.subject}</td>
                  <td style={styles.td}>{contact.comment}</td>
                  <td style={styles.td}>
                    {new Date(contact.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={styles.emptyState}>
                  <div style={styles.emptyContent}>
                    <FaComment style={styles.emptyIcon} />
                    No contact requests found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    // marginLeft: "200px",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f8f9fa",
    fontFamily:"Cursive",
    
    // minHeight: "100vh"
  },
  header: {
    color: "#2c3e50",
    fontSize: "1.8rem",
    marginBottom: "2rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    fontWeight: "600"
  },
  headerIcon: {
    fontSize: "2rem",
    color: "rgba(10,10,10,1)",
  },
  tableContainer: {
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.05)",
    overflow: "hidden",
    backgroundColor: "white",
    display: "flex",  // Centers the table horizontally
    justifyContent: "center", 
  },
  table: {
    width: "100%",  // Adjust width as needed
    borderCollapse: "collapse",
    tableLayout: "fixed",
    margin: "auto"  // Ensures centering
  },
  
  tableHeader: {
    backgroundColor: "#2c3e50",
    color: "white"
  },
  th: {
    padding: "1.2rem",
    fontSize: "0.9rem",
   overflow:"hidden",
  //  backgroundColor:"red",
   width:"100px",
    fontWeight: "900",
    textAlign: "left",
    borderBottom: "2px solid #e0e0e0",
    color:"rgba(10,10,10,1)",
 
  },
  td: {
    padding: "1rem",
    fontSize: "0.9rem",
    borderBottom: "1px solid #f0f0f0",
    verticalAlign: "top",
    wordBreak: "break-word"
  },
  tableRow: {
    transition: "background-color 0.2s ease"
  },
  emailLink: {
    color: "#3498db",
    textDecoration: "none"
  },
  priorityHigh: {
    color: "#e74c3c",
    fontWeight: "600"
  },
  priorityMedium: {
    color: "#f1c40f",
    fontWeight: "600"
  },
  priorityLow: {
    color: "#2ecc71",
    fontWeight: "600"
  },
  emptyState: {
    padding: "3rem",
    textAlign: "center",
    backgroundColor: "#f8f9fa"
  },
  emptyContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    color: "#95a5a6",
    fontSize: "1.1rem"
  },
  emptyIcon: {
    fontSize: "2.5rem",
    color: "#bdc3c7"
  }
};

export default Showcontact;
