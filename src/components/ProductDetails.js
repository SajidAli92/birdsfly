import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = ({ cartItems, wishlistItems, addToCart, addToWishlist, removeFromWishlist }) => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) throw new Error("Failed to fetch product details");
        
        const data = await response.json();
        setProduct(data);

        setIsInCart(cartItems.some(item => item.id === data.id));
        setIsInWishlist(wishlistItems.some(item => item.id === data.id));
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (productId) fetchProduct();
  }, [productId, cartItems, wishlistItems]);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      setIsInWishlist(false);
    } else {
      addToWishlist(product);
      setIsInWishlist(true);
    }
  };

  const handleAddToCart = () => {
    if (isInCart) {
      alert("This item is already in your cart.");
    } else {
      addToCart(product);
      setIsInCart(true);
    }
  };

  const handleBuyNow = () => {
    navigate('/address', { state: { product } });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-container">
      <div className="product-image-section">
        <img src={product.image} alt={product.title} className="product-main-image" />
       
        <button 
          className={`wishlist-icon ${isInWishlist ? 'active' : ''}`}
          onClick={handleWishlistToggle}
          aria-label="Add to Wishlist"
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
      <div className="product-info-section">
        <h2 className="product-title">{product.title}</h2>
        <div className="product-rating">
          <span className="rating-value">Rating: {product.rating && product.rating.rate}</span>
          <span className="rating-count">({product.rating && product.rating.count} Reviews)</span>
        </div>
        <p className="product-price">₹{product.price * 80} <span className="product-discount">54% OFF</span></p>
        <div className="product-offers">
          <h3>Available offers</h3>
          <ul>
            <li>5% Cashback on SBI Bank Credit Cards</li>
            <li>10% Off on orders above ₹10,000</li>
          </ul>
        </div>
        <div className="product-buttons">
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="buy-button" onClick={handleBuyNow}>
            Buy Now
          </button>  
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
