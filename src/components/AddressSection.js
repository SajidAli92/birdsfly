// AddressSection.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './AddressSection.css';

const AddressSection = () => {
  const location = useLocation();
  const product = location.state?.product; // Access the product data

  return (
    <div className="address-section">
      <div className="address-container">
        <h2>Shipping Address</h2>
        <form className="address-form">
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="text" placeholder="Street Address" required />
          <input type="text" placeholder="State/Province" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Postal Code" required />
          <input type="text" placeholder="Country" required />
          <label className="save-address">
            <input type="checkbox" />
            Save this address for future orders
          </label>
          <button type="submit" className="continue-button">Continue to Payment</button>
        </form>
      </div>

      {product && (
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-item">
            <img src={product.image} alt={product.title} />
            <div className="item-details">
              <p>{product.title}</p>
              <p>₹{product.price * 80}</p>
            </div>
          </div>
          <div className="order-totals">
            <p>Subtotal: ₹{product.price * 80}</p>
            <p>Shipping Fee: ₹50.00</p>
            <h4>Total: ₹{(product.price * 80 + 50).toFixed(2)}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressSection;
