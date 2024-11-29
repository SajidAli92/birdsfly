import React, { useState } from "react";
import "./Footernav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faLayerGroup,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function Footernav() {

  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: faHouse, label: "Home" },
    { icon: faCompass, label: "Explore" },
    { icon: faLayerGroup, label: "Category" },
    { icon: faUser, label: "Account" },
    { icon: faCartShopping, label: "Cart" },
  ];

  return (
    <div className="footer">
      <div className="navigation">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`list ${activeIndex === index ? "active" : ""}`} 
              onClick={() => setActiveIndex(index)} 
            >
              <a href="#">
                <span className="icon">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="text">{item.label}</span>
              </a>
            </li>
          ))}
          <div
            className="indicator"
            style={{ left: `${activeIndex * 70}px` }}
          ></div>
        </ul>
      </div>
    </div>
  );
}

export default Footernav;
