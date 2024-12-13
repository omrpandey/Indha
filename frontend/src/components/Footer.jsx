import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

export const Footer = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setMessage('All fields are required.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:2000/api/auth/signup', formData);
            setMessage(response.data.message);
        } catch (error) {
            console.error('Axios Error:', error);
            setMessage(error.response?.data?.error || 'Something went wrong.');
        }
    };
    

    return (
        <>
            <div className="footer">
                <div className="footer-left">
                    <span className="ico-title">Follow Us On-</span>
                    <div className="ico">
                        <span className="footer-icon">
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>
                        <span className="footer-icon">
                            <FontAwesomeIcon icon={faYoutube} />
                        </span>
                        <span className="footer-icon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </div>
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
                        <h3>Sign up to Keep in Touch with Our Community</h3>
                        <form onSubmit={handleSubmit}>
                            <span className="row">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </span>
                            <span className="row">
                                <input
                                    type="email"
                                    name="email"
                                    className="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </span>
                            <span className="input">
                                <input type="submit" value="SIGN UP" className="btn" />
                            </span>
                        </form>
                        {message && <p className="message">{message}</p>}
                    </div>
                    <div className="footer-copy">
                        <p>© Copyright 2019. All Rights Reserved</p>
                        <div className="payment">
                            <img src="./assets/p1.svg" alt="p1" />
                            <img src="./assets/p2.svg" alt="p2" />
                            <img src="./assets/p3.svg" alt="p3" />
                            <img src="./assets/p4.svg" alt="p4" />
                            <img src="./assets/p5.svg" alt="p5" />
                            <img src="./assets/p6.svg" alt="p6" />
                            <img src="./assets/p7.svg" alt="p7" />
                            <img src="./assets/p8.svg" alt="p8" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
