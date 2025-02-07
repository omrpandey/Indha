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
    <div style={{ 
        marginLeft:"200px",
        padding: "20px" }}>
      <h2 style={{ color: "red", textAlign: "center" }}>Contact Requests</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid red",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#ffe6e6", color: "red" }}>
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
            <tr key={index} style={{ color: "red" }}>
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
  th: {
    border: "1px solid red",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    border: "1px solid red",
    padding: "10px",
  },
};


