
import React, { useRef, useState } from 'react';
import './OfferSlider.css';
import MensShirt1 from "../images/shirt1.webp";
import MensShirt2 from "../images/shirt2.jpg";
import MensShirt3 from "../images/shirt3.webp";
import Kurtis1 from "../images/kurtis1.webp";
import GirlDress1 from "../images/girls1.jpeg";
import Kid1 from "../images/kid1.webp";
import Kurta1 from "../images/kurta1.webp";
import Kurtis2 from "../images/kurti2.jpg";
import Kurtis3 from "../images/kurti3.webp";
import Shoes1 from "../images/PumaShoesmen.jpg";
import Shoes2 from "../images/killershoes.webp";



const offers = [
    { id: 1, title: 'Formy Grey Shirt', price: 'Under ₹990', image: MensShirt1 },
    { id: 2, title: 'Men Ribbed Full Shirt', price: 'Just ₹999', image: MensShirt2 },
    { id: 3, title: 'White & Black Shirt', price: 'Under ₹990', image: MensShirt3 },
    { id: 4, title: 'Black Kurtis for Girls', price: 'Under ₹999', image: Kurtis1 },
    { id: 5, title: 'Girls Dress', price: 'Under ₹990', image: GirlDress1 },
    { id: 6, title: 'Girls Dress', price: 'Under ₹999', image: Kid1 },
    { id: 7, title: 'Mens Kurtas', price: 'Under ₹990', image: Kurta1},
    { id: 8, title: 'Kasida sky blue Kurti', price: 'Under ₹999', image: Kurtis2 },
    { id: 9, title: 'Women kurti', price: 'Under ₹990', image: Kurtis3 },
    { id: 10, title: 'Women Kurti', price: 'Under ₹990', image: Kurtis1 },
    { id: 11, title: 'Puma shoes', price: 'Under ₹999', image: Shoes1 },
    { id: 12, title: 'Mens Shirt', price: 'Under ₹990', image: MensShirt1 },
    { id: 13, title: 'Killer Shoes', price: 'Under ₹999', image: Shoes2 },
    { id: 14, title: 'Men White Shirt', price: 'Under ₹990', image: MensShirt2 },
];

const OfferSlider2 = () => {
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
      <h2>Under Rs 999</h2>
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

export default OfferSlider2;
