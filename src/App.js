import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Navbar from "./components/Navbar";
import Footernav from "./components/Footernav";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from "./components/ForgotPassword";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Help from "./components/Help";
import AddressSection from './components/AddressSection';
import SearchResults from "./components/SearchResults"; 
import Profile from './components/Profile';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Navbar setSearchResults={setSearchResults} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgotPassword />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/help" element={<Help />} />
          <Route path="/address" element={<AddressSection />} />
          <Route path="/profile" element={<Profile/>}/>

          <Route 
            path="/product/:productId" 
            element={
              <ProductDetails 
                addToCart={addToCart} 
                addToWishlist={addToWishlist} 
                removeFromWishlist={removeFromWishlist} 
                cartItems={cartItems} 
                wishlistItems={wishlistItems}
              />
            } 
          />
          <Route 
            path="/cart" 
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} 
          />
          <Route 
            path="/wishlist" 
            element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />} 
          />
          <Route 
            path="/search-results" 
            element={<SearchResults searchResults={searchResults} />} 
          />
        </Routes>
      </div>
      <Footernav />
    </Router>
  );
}

export default App;
