import React, { useState } from 'react';
import birdsflylogo from '../images/birdsfly logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setSearchResults }) => { 
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleSearchSubmit = async () => {
    if (!searchQuery.trim()) {
      alert('Please enter a search term');
      return;
    }

    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const products = await response.json();

      const matchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(matchedProducts);
      navigate('/search-results'); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={toggleSidebar}>
        <img src={birdsflylogo} alt="Birdsfly Logo" />
      </div>


      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar-btn" onClick={toggleSidebar}>&times;</button>
        <Link to="/" className="sidebar-link">Home</Link>
        <Link to="/aboutus" className="sidebar-link">About</Link>
        <Link to="/services" className="sidebar-link">Services</Link>
        <Link to="/help" className="sidebar-link">Help</Link>
      </div>
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-logo" onClick={handleSearchSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>


      <div 
        className="navbar-login"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!isLoggedIn ? (
          <button className="login-button">
            <Link to="/login"> Login </Link>
          </button>
        ) : (
          <button className="account-button">
            My Account
          </button>
        )}
        {!isLoggedIn && isDropdownOpen && (
          <div className="login-dropdown">
            <Link to="/signup">New Customer? Sign Up</Link>
            <Link to="/profile">My Profile</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/rewards">Rewards</Link>
            <Link to="/help"> Help </Link>
          </div>
        )}
      </div>


      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-icon">&#9776;</span>
      </button>
      
      <div className="cart">
        <Link to="/cart">
          <button className="cart-button"><FontAwesomeIcon icon={faCartShopping} /></button>
        </Link>
        <Link to="/wishlist">
          <button className="cart-button" id='wishlist'><FontAwesomeIcon icon={faHeart} /></button>
        </Link>
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/aboutus" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/help" className="nav-link">Help</Link>
      </div>
    </nav>
  );
};

export default Navbar;
