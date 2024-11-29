
import React, { useRef, useState } from 'react';
import './OfferSlider.css';
import Tshirt2 from "../images/tshirt2.jpeg";
import Tshirt3 from "../images/tshirt3.webp";
import Tshirt4 from "../images/tshirts4.webp";
import Tshirt5 from "../images/tshirts5.webp";
import Tshirt6 from "../images/tshirts6.webp";
import Tshirt7 from "../images/tshirt7.webp";
import Shirt1 from "../images/shirt1.webp";
import Shirt2 from "../images/shirt2.jpg";
import Shirt3 from "../images/shirt3.webp";

const offers = [
    { id: 1, title: 'Mens White Tshirt', price: 'Under ₹300', image: Tshirt2 },
    { id: 2, title: 'T Shirt', price: 'Just ₹299', image: Tshirt2 },
    { id: 3, title: 'Black Tshirt', price: 'Under ₹300', image: Tshirt3 },
    { id: 4, title: 'Spykr Tshirt', price: 'Under ₹299', image: Tshirt4 },
    { id: 5, title: 'Roadster Tshirt', price: 'Under ₹299', image: Tshirt5 },
    { id: 6, title: 'Mens Tshirt', price: 'Under ₹300', image: Tshirt6 },
    { id: 7, title: 'Tshirt', price: 'Under ₹300', image: Tshirt7 },
    { id: 8, title: 'Formy Grey Shirt', price: 'Under ₹300', image: Shirt1 },
    { id: 9, title: 'Men Ribbed Full Shirt', price: 'Under ₹300', image: Shirt2},
    { id: 10, title: 'Spykar Men Shirt', price: 'Under ₹300', image: Shirt3 },
    { id: 11, title: 'White Shirt', price: 'Under ₹300', image: Shirt3},
    { id: 12, title: 'Shirt', price: 'Under ₹300', image: Shirt1 },
    { id: 13, title: 'Shirt', price: 'Under ₹300', image: Shirt1 },
    { id: 14, title: 'Shirt', price: 'Under ₹300', image: Shirt1 },
];

const OfferSlider = () => {
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
      <h2>Under Rs 300</h2>
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

export default OfferSlider;
