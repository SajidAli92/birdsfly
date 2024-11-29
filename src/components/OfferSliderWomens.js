
import React, { useRef, useState } from 'react';
import './OfferSlider.css';
import electronicsImg from "../images/electronics.png";
import fashionImage from "../images/fashion.png";

const offers = [
    { id: 1, title: 'Lunch Boxes', price: 'Under ₹300', image: electronicsImg },
    { id: 2, title: 'Pillows', price: 'Just ₹299', image: fashionImage },
    { id: 3, title: 'Fitness Must Haves', price: 'Under ₹300', image: electronicsImg },
    { id: 4, title: 'Diyas', price: 'Under ₹299', image: fashionImage },
    { id: 5, title: 'Spiritual Items', price: 'Under ₹299', image: electronicsImg },
    { id: 6, title: 'Fitness Accessories', price: 'Under ₹300', image: fashionImage },
    { id: 7, title: 'Fitness Accessories', price: 'Under ₹300', image: electronicsImg },
    { id: 8, title: 'Fitness Accessories', price: 'Under ₹300', image: fashionImage },
    { id: 9, title: 'Fitness Accessories', price: 'Under ₹300', image: electronicsImg },
    { id: 10, title: 'Fitness Accessories', price: 'Under ₹300', image: fashionImage },
    { id: 11, title: 'Fitness Accessories', price: 'Under ₹300', image: electronicsImg },
    { id: 12, title: 'Fitness Accessories', price: 'Under ₹300', image: fashionImage },
    { id: 13, title: 'Fitness Accessories', price: 'Under ₹300', image: electronicsImg },
    { id: 14, title: 'Fitness Accessories', price: 'Under ₹300', image: fashionImage },
];

const OfferSliderWomens = () => {
  const sliderRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);

  const handleScroll = () => {
    if (sliderRef.current) {
      setShowLeftButton(sliderRef.current.scrollLeft > 0);
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="offer-slider">
      <h2>90% Off on Women's Wear</h2>
      {showLeftButton && (
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>
      )}
      <div className="offer-container" ref={sliderRef} onScroll={handleScroll}>
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <h3>{offer.title}</h3>
            <p>{offer.price}</p>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default OfferSliderWomens;
