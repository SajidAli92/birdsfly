import React from 'react';
import './SpecialOffers.css';
import shoes from "../images/PumaShoesmen.jpg";  
import LibasClothes from "../images/libas.webp";
import Lenskart from "../images/lenscart.webp";  
import KillerShoes from "../images/killershoes.webp";

const offers = [
  { id: 1, title: "PUMA, ADIDAS...", discount: "Min. 65% Off", image: shoes },
  { id: 2, title: "Libas, Indo Era...", discount: "Min. 70% Off", image: LibasClothes },
  { id: 3, title: "Lenskart...", discount: "Min. 50% Off", image: Lenskart },
  { id: 4, title: "UCB, Killer..", discount: "60-80% Off", image: KillerShoes },
];

const SpecialOffers = () => {
  return (
    <div>
        <h2 className='head2'> Offers of the Day </h2>
       <div className="special-offers-container">
      {offers.map((offer) => (
        <div key={offer.id} className="special-offer-card">
          <div className="special-offer-info">
            <h3>{offer.title}</h3>
            <p>{offer.discount}</p>
          </div>
          <div className="special-offer-image-wrapper">
            <img src={offer.image} alt={offer.title} className="special-offer-image" />
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default SpecialOffers;
