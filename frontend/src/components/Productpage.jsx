import React, { useState, useEffect } from 'react';
import './productpage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

export const Productpage = () => {
    const [rangeValue, setRangeValue] = useState(5000); // Default slider value
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState("Black");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:2000/api/products");
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
        alert(Filtered Value: ₹${rangeValue}, Selected Color: ${selectedColor});
    };

    return (
        <>
            <div className="category">
                <div className="head">
                    <h3>
                        <span className="cc">C</span>atego
                        <span className="ory">ry</span>
                    </h3>
                    <div className="lists">
                        <ul>
                            <li><span className='text'>All Category</span><span className="plus">+</span></li>
                            <li><span className='text'>Apparel(49)</span><span className="plus">+</span></li>
                            <li><span className='text'>Cuttons(49)</span><span className="plus">+</span></li>
                            <li><span className='text'>Decorations(49)</span><span className="plus">+</span></li>
                            <li><span className='text'>Candles(49)</span><span className="plus">+</span></li>
                            <li><span className='text'>Notebooks(49)</span><span className="plus">+</span></li>
                            <li><span className='text'>Documents(49)</span><span className="plus">+</span></li>
                            <li><span className='text'>Toys(49)</span><span className="plus">+</span></li>
                            <li><span className='text'>Home Decor(49)</span><span className="plus">+</span></li>
                            <li><span className='text'>Office(49)</span><span className="plus">+</span></li>
                            <li><span className='text'>Painted(49)</span><span className="plus">+</span></li>
                            <li><span className='text'>HandCrafts(49)</span><span className="plus">+</span></li>
                        </ul>
                    </div>
                </div>
              
                <div className="product-side">
                    <div className="filter-container">
                        <h2 className="filter-title">Filter Item<span className="ccc">S</span></h2>
                        <div className="slider-section">
                            <label htmlFor="slider" className="slider-label">
                                <span className="ccc">P</span>rice Range:
                            </label>
                            <input
                                type="range"
                                id="slider"
                                min="0"
                                max="11000"
                                step="100"
                                value={rangeValue}
                                onChange={(e) => setRangeValue(e.target.value)}
                                className="slider"
                            />
                            <div className="range-value">₹{rangeValue}</div>
                        </div>
                        <div className="select">
                            <span>Choose Colour</span>
                            <select
                                value={selectedColor}
                                onChange={(e) => setSelectedColor(e.target.value)}
                            >
                                <option value="Black">Black</option>
                                <option value="Red">Red</option>
                            </select>
                            <button className="btn" onClick={handleFilter}>Filter</button>
                        </div>
                    </div>
                    <div className="current">
                        <h4>Current Category</h4>
                        <div className="sort">
                            <h5>Sort By</h5>
                            <select>
                                <option value="1">High to Low Price</option>
                                <option value="2">Low to High Price</option>
                            </select>
                        </div>  
                    </div>
                    <div className="allproduct">
                        <div className="wrap">
                            {loading ? (
                                <p>Loading products...</p>
                            ) : products.length < 1 ? (
                                <p>No products available</p>
                            ) : (
                                products.map((product) => (
                                    <div className="card" key={product._id}>
                                        <img 
                                          src={product.images && product.images.length > 0 
                                               ? http://localhost:2000/${product.images[0]} 
                                               : './assets/nw2.png'} 
                                          alt={product.name} 
                                        />
                                        <div className="add-section">
                                            <button className="cart">
                                                <FontAwesomeIcon icon={faHeart} className='like' />
                                            </button>
                                            <button className="cart">
                                                <FontAwesomeIcon className="icon" icon={faShoppingCart} />
                                            </button>
                                        </div>
                                        <div className="detail">
                                            <h5>{product.name}</h5>
                                            <p>₹{product.discountedPrice || product.price} /-</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};