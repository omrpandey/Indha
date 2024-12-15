import React ,{useState} from 'react';
import './productpage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";


export const Productpage = () => {
    const [rangeValue, setRangeValue] = useState(0);
    const [selectedColor, setSelectedColor] = useState("");

    const handleFilter = () => {
        alert(`Filtered Value: ${rangeValue}, Selected Color: ${selectedColor}`);
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
                        <li>
                                <span className='text'>All Category</span>
                                <span className="plus"></span>
                            </li>
                            <li>
                                <span className='text'>Apparel(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>Cuttons(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>Decorations(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>Candles(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>Notebooks(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'> Documents(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>Toys(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>Home Decor(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>Office(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>Painted(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>HandCrafts(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>HandCrafts(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>HandCrafts(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>HandCrafts(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>HandCrafts(49)</span>
                                <span className="plus">+</span>
                            </li>
                            <li>
                                <span className='text'>HandCrafts(49)</span>
                                <span className="plus">+</span>
                            </li>
                        </ul>
                    </div>
                </div>
              
<div className="product-side">
        <div className="filter-container">
            <h2 className="filter-title">Filter Item<span className="ccc">S</span></h2>
            <div className="slider-section">
                <label htmlFor="slider" className="slider-label"><span className="ccc">P</span>rice Range: </label>
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
<div><span>Choose Colour</span>
    <select name="" id="">
        <option value="1">Black</option>
        <option value="2">Red</option>
    </select></div>
    <button className="btn">Filter</button>
</div>

            </div>
            <div className="current">
             <h4>Cuurent Category</h4>
             <div className="sort">
                <h5>
                    Sort By
                </h5>
                <select name="" id="">
                    <option value="1">Hight to Low Price</option>
                    <option value="2">Low to High Price</option>
                </select>
             </div>  
          
            </div>
<div className="allproduct">
    <div className="wrap">
        <div className="card">
            <img src="./assets/nw1.jpg" alt="" />
           
           <div className="add-section">
            <button className="cart"> <FontAwesomeIcon icon={faHeart} className='like' /></button>
          <button className="cart">  <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            </button>
            </div>
            <div className="detail">
                <h5>Indha Hand Blocks</h5>
                <p>$990 /-</p>
            </div>


        </div>
        {/* second */}
        <div className="card">
            <img src="./assets/nw2.png" alt="" />
           
           <div className="add-section">
            <button className="cart"> <FontAwesomeIcon icon={faHeart} className='like' /></button>
          <button className="cart">  <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            </button>
            </div>
            <div className="detail">
                <h5>Indha Hand Blocks</h5>
                <p>$990 /-</p>
            </div>


        </div>
        {/* third  */}
        <div className="card">
            <img src="./assets/nw3.png" alt="" />
           
           <div className="add-section">
            <button className="cart"> <FontAwesomeIcon icon={faHeart} className='like' /></button>
          <NavLink to ='/Productui'className="cart">  <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            </NavLink>
            </div>
            <div className="detail">
                <h5>Indha Hand Blocks</h5>
                <p>$990 /-</p>
            </div>


        </div>
        <div className="card">
            <img src="./assets/nw4.png" alt="" />
           
           <div className="add-section">
            <button className="cart"> <FontAwesomeIcon icon={faHeart} className='like' /></button>
          <button className="cart">  <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            </button>
            </div>
            <div className="detail">
                <h5>Indha Hand Blocks</h5>
                <p>$990 /-</p>
            </div>


        </div>
        <div className="card">
            <img src="./assets/nw5.png" alt="" />
           
           <div className="add-section">
            <button className="cart"> <FontAwesomeIcon icon={faHeart} className='like' /></button>
          <button className="cart">  <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            </button>
            </div>
            <div className="detail">
                <h5>Indha Hand Blocks</h5>
                <p>$990 /-</p>
            </div>


        </div>
        <div className="card">
            <img src="./assets/nw6.png" alt="" />
           
           <div className="add-section">
            <button className="cart"> <FontAwesomeIcon icon={faHeart} className='like' /></button>
          <button className="cart">  <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            </button>
            </div>
            <div className="detail">
                <h5>Indha Hand Blocks</h5>
                <p>$990 /-</p>
            </div>


        </div>

    </div>
</div>
        </div>

        </div>
        </>
    );
};
