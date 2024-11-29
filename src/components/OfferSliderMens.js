
import React, { useRef, useState } from 'react';
import './OfferSlider.css';
import WinterMen1 from "../images/WinterMen1.webp";
import WinterMen2 from "../images/WinterMen2.webp";
import WinterMen3 from "../images/WinterMen3.webp";
import WinterMen4 from "../images/WinterMen4.webp";
import WinterMen5 from "../images/WinterMen5.webp";
import WinterMen6 from "../images/WinterMen6.webp";
import WomenWinter1 from "../images/WomenWinter1.webp";
import WomenWinter2 from "../images/WomenWinter2.webp";
import WomenWinter3 from "../images/WomenWinter3.webp";
import WomenWinter4 from "../images/WomenWinter4.webp";
import WomenWinter5 from "../images/WomenWinter5.webp";
import WomenWinter6 from "../images/WomenWinter6.webp";
import KidsWinter1 from "../images/kidsWinter1.webp";
import KidsWinter2 from "../images/KidsWinter2.webp";
import KidsWinter3 from "../images/KidsWinter3.webp";

const offers = [
    { id: 1, title: 'The Roadster Lifestyle', price: 'Under ₹300', image: WinterMen1 },
    { id: 2, title: 'Lesso Women pullover Sweater', price: 'Just ₹299', image: WomenWinter1},
    { id: 3, title: 'Kvetoo woolen Sweater', price: 'Under ₹300', image: WinterMen2 },
    { id: 4, title: 'Kookie Kids winter wear', price: 'Under ₹299', image: KidsWinter1 },
    { id: 5, title: 'Roadster Women Jacket', price: 'Under ₹299', image: WomenWinter2 },
    { id: 6, title: 'Winter Jacket for men', price: 'Under ₹300', image: WinterMen6 },
    { id: 7, title: 'Roadster Kids Winter wear', price: 'Under ₹300', image: KidsWinter2 },
    { id: 8, title: 'Women Winter Dress', price: 'Under ₹300', image: WomenWinter3 },
    { id: 9, title: 'Black Hoddie, The indian Garage', price: 'Under ₹300', image: WinterMen4 },
    { id: 10, title: 'Women Stylish Hoodie', price: 'Under ₹300', image: WomenWinter4},
    { id: 11, title: 'Hoddie for Men', price: 'Under ₹300', image: WinterMen3 },
    { id: 12, title: 'Bewakoof Womens Loose Jacket', price: 'Under ₹300', image: WomenWinter5 },
    { id: 13, title: 'Beyoung Men Park Gray Hoodie', price: 'Under ₹300', image: WinterMen5 },
    { id: 14, title: 'Sweater for Women', price: 'Under ₹300', image: WomenWinter6 },
    { id: 15, title: 'Kids Jacket', price: 'Under ₹300', image: KidsWinter3 },
];

const OfferSliderMens = () => {
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
      <h2> Offers on Winter Wear </h2>
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

export default OfferSliderMens;
