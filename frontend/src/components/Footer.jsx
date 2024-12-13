import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
export const Footer=()=>{
    return(
        <>
     <div className="footer">
        <div className="footer-left">
            <span className="ico-title">Follow Us On-</span>
           <div className="ico"> <span className="footer-icon">
                  <FontAwesomeIcon icon={faFacebook}/></span>
<span className="footer-icon">  <FontAwesomeIcon icon={faYoutube}/></span>
<span className="footer-icon">  <FontAwesomeIcon icon={faInstagram}/></span></div>
        </div>
        <div className="footer-right">
            <div className="footer-links">
   <NavLink to="/about" className="nav-link" activeClassName="active">
            About Us
          </NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact Us
          </NavLink>
          <NavLink to="/search" className="nav-link" activeClassName="active">
            Search
          </NavLink>
          <NavLink to="/Terms" className="nav-link" activeClassName="active">
        Terms & Conditions
          </NavLink>
          <NavLink to="/delivery" className="nav-link" activeClassName="active">
       Shipping & Delivery
          </NavLink>
          <NavLink to="/return" className="nav-link" activeClassName="active">
          Return & Refund Policy
          </NavLink>
            </div>
            <div className="footer-sigin">
                <h3>Sigin up to Keep in Touch with Our Community</h3>
                <form action="">
                    <span className="row">
                        <input type="text" name="" id="" placeholder='USername'/>
                        <input type="password" name="" id="" placeholder='Password'/>
                    </span>
                    <span className="row">
                        <input type="email" name="" id="" className='email'placeholder='Email' />
                    </span>
                    <span className="input">
                        <input type="submit" value="SIGN UP" className='btn'/>
                    </span>
                </form>
            </div>
            <div className="footer-copy">
                <p>© Copyright 2019. All Rights Reserved</p>
                <div className="payment">
                    <img src="./assets/p1.svg"prefix='' alt="p1" />
                    <img src="./assets/p2.svg"prefix='' alt="p1" />
                    <img src="./assets/p3.svg"prefix='' alt="p1" />
                    <img src="./assets/p4.svg"prefix='' alt="p1" />
                    <img src="./assets/p5.svg"prefix='' alt="p1" />
                    <img src="./assets/p6.svg"prefix='' alt="p1" />
                    <img src="./assets/p7.svg"prefix='' alt="p1" />
                    <img src="./assets/p8.svg"prefix='' alt="p1" />
                </div>
            </div>
        </div>
     </div>
        </>
    )
}