import React from 'react';
import './Wishlist.css'; 

const Wishlist = ({ wishlistItems = [], removeFromWishlist }) => { 
  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty.</p>
      ) : (
        wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.title} className="wishlist-item-image" />
            <div className="wishlist-item-info">
              <h3>{item.title}</h3>
              <p>₹{item.price * 80}</p>
            </div>
            <button onClick={() => removeFromWishlist(item.id)} className="remove-button">
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
