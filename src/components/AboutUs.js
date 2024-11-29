import React from 'react';
import './AboutUs.css';
import Memeber1 from "../images/sajidimg1.jpg"
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about Birdsfly and our mission to deliver excellence.</p>
      </header>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>We strive to provide the best shopping experience for our customers with a wide range of products and unbeatable service.</p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>To become the most trusted e-commerce platform where customers can shop with confidence and satisfaction.</p>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={Memeber1} alt="Team Member 1" />
            <h3>Sajid Ali</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={Memeber1} alt="Team Member 2" />
            <h3>Sajid Ali</h3>
            <p>Marketing Head</p>
          </div>
          <div className="team-member">
            <img src={Memeber1} alt="Team Member 3" />
            <h3>Sajid Ali</h3>
            <p>Product Manager</p>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>For inquiries, reach out to us at <Link  to="mailto:info@birdsfly.com">info@birdsfly.com</Link></p>
      </section>
    </div>
  );
};

export default AboutUs;
