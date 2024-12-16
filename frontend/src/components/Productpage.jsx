import React, { useState, useEffect } from 'react';
import './productpage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

export const Productpage = () => {
    const [rangeValue, setRangeValue] = useState(0);
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:2000/api/products"); // Correct API URL
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleFilter = () => {
        alert(`Filtered Value: ₹${rangeValue}`);
    };

    return (
        <div className="product-container">
            {/* Filter Section */}
            <div className="filter-section">
                <h2>Filter Products</h2>
                <input
                    type="range"
                    min="0"
                    max="11000"
                    step="100"
                    value={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                <div>₹{rangeValue}</div>
                <button onClick={handleFilter}>Apply Filter</button>
            </div>

            {/* Product Section */}
            <div className="product-grid">
                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    products.map((product) => (
                        <div className="product-card" key={product._id}>
                            <img src={product.images?.[0] || './assets/default.jpg'} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>₹{product.discountedPrice || product.price}</p>
                            <div className="product-icons">
                                <button>
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
