import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; 

const Cart = ({ cartItems = [], removeFromCart }) => {
  const navigate = useNavigate();

 
  const handleIndividualBuyNow = (item) => {
    navigate('/address', { state: { cartItems: [item] } });
  };

  const handleBuyNow = () => {
    if (cartItems.length > 0) {
      navigate('/address', { state: { cartItems } });
    } else {
      alert('Your cart is empty. Please add items to proceed.');
    }
  };

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>₹{item.price * 80}</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => removeFromCart(item.id)} className="remove-button">
                  Remove
                </button>
                <button onClick={() => handleIndividualBuyNow(item)} className="buy-now-button">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
          <button className="buy-now-button main-buy-now" onClick={handleBuyNow}>
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
