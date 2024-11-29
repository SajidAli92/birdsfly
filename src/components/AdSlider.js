import React, { useState, useEffect } from 'react';
import './AdSlider.css';
import laptopImage from "../images/lapp.jpg"
import phoneImage from "../images/phooneee.jpg"


const ads = [
  { id: 1, image: laptopImage, link: '#ad1' },
  { id: 2, image: phoneImage, link: '#ad2' },
  { id: 3, image: laptopImage, link: '#ad3' },
  // Add more 
];

const AdSlider = () => {
  const [currentAd, setCurrentAd] = useState(0);

  const nextAd = () => {
    setCurrentAd((currentAd + 1) % ads.length);
  };

  const prevAd = () => {
    setCurrentAd((currentAd - 1 + ads.length) % ads.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextAd();
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval); 
  }, [currentAd]);

  return (
    <div className="ad-slider">
      <button className="slider-btn left-btn" onClick={prevAd}>
        &lt;
      </button>

      <a href={ads[currentAd].link} className="ad-content">
        <img src={ads[currentAd].image} alt={`Ad ${ads[currentAd].id}`} className="ad-image" />
      </a>

      <button className="slider-btn right-btn" onClick={nextAd}>
        &gt;
      </button>
    </div>
  );
};

export default AdSlider;
