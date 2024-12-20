import React from 'react';
import './wish.css';

export const Wishlist = () => {
  const product = {
    image: './assets/indha2.jpg', // Path to the product image
    name: 'Sample Product',
    price: 999, // Price in INR
    quantity: 1
  };

  return (
    <div className="wishlist-card">
      <div className="card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p>Price: ₹{product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <div className="product-actions">
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
      <div className="card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p>Price: ₹{product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <div className="product-actions">
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
      <div className="card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p>Price: ₹{product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <div className="product-actions">
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
