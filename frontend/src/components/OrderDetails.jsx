import React from "react";
import "./OrderDetails.css";

export const OrderDetails = () => {
  return (
    <div className="order-container">
      <h2>User Order Details</h2>
      <div className="order-card">
        <p><strong>Name:</strong> Pahadi</p>
        <p><strong>Number of Orders:</strong> 12</p>
        <p><strong>Address:</strong> chemburrr</p>
        <p><strong>Phone Number:</strong> 1731214</p>
        <p><strong>Email:</strong> php@gmail.com</p>
        <p><strong>Order Date:</strong> 12-10-24</p>
        <p><strong>Total Amount:</strong> $1000</p>
        <p><strong>Delivery Date:</strong> 1-1-25</p>
      </div>
    </div>
  );
};

// export default UserOrderDetails;
