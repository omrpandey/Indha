import axios from "axios";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import "./payment.css";

export const PaymentPage = () => {
    const [upiLink, setUpiLink] = useState("");
    const [amount] = useState(""); // Default amount (change as needed)
    const [recipient] = useState("John Doe"); // Default recipient name (change as needed)
    const [cartProducts, setCartProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleDone = async () => {
        // Handle the done button click event
        try {
            // Send DELETE request to clear the cart
            const response = await fetch("http://localhost:2000/api/clear-cart", {
                method: "DELETE",
            });
    
            if (!response.ok) {
                throw new Error("Failed to clear the cart");
            }
    
            const data = await response.json();
            alert(data.message); // Show the success message from the server
            window.location.href = "/admin/order"; // Redirect after clearing cart
        } catch (error) {
            console.error("Error clearing cart:", error);
            alert("An error occurred while processing the payment.");
        }
    };

    // Fetch cart data from the API when the component mounts
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartResponse = await axios.get("http://localhost:2000/api/cart");
        const cartData = cartResponse.data.cart.products.map((product) => ({
          ...product,
          quantity: product.quantity || 1,
        }));
        setCartProducts(cartData);

        const cartTotal = cartData.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        );
        setTotalAmount(cartTotal);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCart(); 
  }, []);

  useEffect(() => {
    const generateUPI = async () => {
        if (totalAmount > 0) {  // Ensure totalAmount is set before making API call
            try {
                const response = await fetch("http://localhost:2000/generate-upi", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ amount: totalAmount }),
                });

                const data = await response.json();
                if (data.upiLink) {
                    setUpiLink(data.upiLink);
                }
            } catch (error) {
                console.error("Error generating UPI:", error);
            }
        }
    };

    generateUPI();
}, [totalAmount]); // Runs only when totalAmount updates


    return (
        <div className="payment-container flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 ">
            {/* Title and Tagline */}
            <h1 className="text-3xl font-bold text-blue-600">Scan & Pay</h1>
            <p className=" mt-2 m1">"Fast, Secure & Hassle-Free Payments!"</p>

            {/* QR Code */}
            {upiLink ? (
                <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
                    <QRCode value={upiLink} size={256} />
                    <p className="m2 text-center mt-2 text-gray-600">Scan to Pay ₹{totalAmount}</p>

                    {/* Buttons */}
                    <div className="mt-4 flex justify-center space-x-4 button-container">
                        <button
                            onClick={handleDone} 
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow done"
                        >
                            Done
                        </button>
                    </div>
                </div>
            ) : (
                <p className="mt-6 text-gray-500">Generating QR Code...</p>
            )}
        </div>
    );
};
