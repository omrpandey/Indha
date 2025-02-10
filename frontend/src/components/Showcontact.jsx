import React from "react";

export const Showcontact = () => {
  // Dummy data
  const contacts = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      priority: "High",
      department: "Sales Support",
      telephone: "1234567890",
      subject: "Product Inquiry",
      comment: "I need more details about your services.",
      submittedAt: "2025-02-07",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      priority: "Low",
      department: "B2B Enquiry",
      telephone: "9876543210",
      subject: "Partnership Request",
      comment: "Interested in collaborating.",
      submittedAt: "2025-02-06",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Requests</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Priority</th>
            <th style={styles.th}>Department</th>
            <th style={styles.th}>Telephone</th>
            <th style={styles.th}>Subject</th>
            <th style={styles.th}>Comment</th>
            <th style={styles.th}>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.td}>{contact.name}</td>
              <td style={styles.td}>{contact.email}</td>
              <td style={styles.td}>{contact.priority}</td>
              <td style={styles.td}>{contact.department}</td>
              <td style={styles.td}>{contact.telephone}</td>
              <td style={styles.td}>{contact.subject}</td>
              <td style={styles.td}>{contact.comment}</td>
              <td style={styles.td}>{contact.submittedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    marginLeft: "200px",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  header: {
    color: "#333",
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  tableHeader: {
    backgroundColor: "#f9f9f9",
    color: "#333",
    textAlign: "left",
  },
  th: {
    padding: "15px",
    border: "1px solid #ddd",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "0.9rem",
  },
  td: {
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "left",
    fontSize: "0.9rem",
  },
  tableRow: {
    backgroundColor: "#fff",
    transition: "background-color 0.3s ease",
  },
  tableRowHover: {
    backgroundColor: "#f0f0f0",
  },
};

export default Showcontact;
