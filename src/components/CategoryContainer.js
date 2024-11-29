import React from "react";
import "./CategoryContainer.css";
import electronicsImg from "../images/electronics.png";
import fashionImage from "../images/fashion.png";
import booksImage from "../images/books.png";  
import mobilesImage from "../images/mobiles.png";
import homedecorImage from "../images/HomeDecor.png";
import beautyImage from "../images/beauty.png";
import sportsImage from "../images/sports.png";
import automotiveImage from "../images/automotive.png";
import groceriesImage from "../images/groceries.png";
import musicImage from "../images/music.png";
import petsImage from "../images/pets.png";
import furnitureImage from "../images/furniture.png";
import fitnessImage from "../images/fitness.png";
import toysImage from "../images/toys.png";

const CategoryContainer = () => {
  const categories = [
    { id: 1, name: "Electronics", image: electronicsImg },
    { id: 2, name: "Fashion", image: fashionImage },
    { id: 3, name: "Books", image: booksImage }, 
    { id: 4, name: "Mobiles", image: mobilesImage },
    { id: 5, name: "Home Decor", image: homedecorImage }, 
    { id: 6, name: "Beauty", image: beautyImage },
    { id: 7, name: "Sports", image: sportsImage },
    { id: 8, name: "Automotive", image: automotiveImage },
    { id: 9, name: "Groceries", image: groceriesImage },
    { id: 10, name: "Music", image: musicImage },
    { id: 11, name: "Pets", image: petsImage },
    { id: 12, name: "Furniture", image: furnitureImage },
    { id: 13, name: "Fitness", image: fitnessImage },
    { id: 14, name: "Toys", image: toysImage },
  ];

  return (
    <div className="category-container">
      <div className="category-marquee">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <img
              src={category.image} 
              alt={category.name}
              className="category-image"
            />
            <span className="category-name">{category.name}</span>
          </div>
        ))}
        {categories.map((category) => (
          <div key={category.id + categories.length} className="category-item">
            <img
              src={category.image} 
              alt={category.name}
              className="category-image"
            />
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
