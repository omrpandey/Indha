import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <> 
      <div className="header">
        <div className="logo">
          <img src="./assets/ndha1.webp" alt="Logo 1" />
          <img src="./assets/indha2.jpg" alt="Logo 2" />
        </div>
        <div className="content">
          <div className="links">
            <NavLink to="/" className="nav-link" activeClassName="active" exact>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
            <div className="dropdown-container">
              <NavLink to="/product" className="nav-link" activeClassName="active">
                Product
              </NavLink>
              <div className="dropdown">
                <NavLink to="/product/item1" className="nav-link" activeClassName="active">Christmas Gifts</NavLink>
                <NavLink to="/product/item2" className="nav-link" activeClassName="active">Festival Needs</NavLink>
                <NavLink to="/product/item3" className="nav-link" activeClassName="active">Corporate Gifting</NavLink>
                <NavLink to="/product/item4" className="nav-link" activeClassName="active">Sustainable Products</NavLink>
                <NavLink to="/product/item5" className="nav-link" activeClassName="active">Home Furnishing</NavLink>
              </div>
            </div>
            <NavLink to="/blog" className="nav-link" activeClassName="active">
              Blog
            </NavLink>
            <NavLink to="/join" className="nav-link" activeClassName="active">
              Join Us
            </NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact Us
            </NavLink>
            <NavLink to="/sale" className="nav-link" activeClassName="active">
              Sale
            </NavLink>
          </div>
          <div className="search">
            <p>All Categories</p>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="right">
          <FontAwesomeIcon className="icon" icon={faUser} />
          <FontAwesomeIcon className="icon" icon={faShoppingCart} />
        </div>
      </div>
    </>
  );
};