import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-hero">
        <h1>Need Assistance?</h1>
        <p>We're here to help you with any questions or concerns you may have.</p>
      </div>

      <div className="help-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>How do I track my order?</li>
          <li>What is the return policy?</li>
          <li>How do I reset my password?</li>
          <li>How can I contact customer support?</li>
        </ul>
      </div>

      <div className="help-contact">
        <h2>Contact Us</h2>
        <p>Our support team is available 24/7 to help you.</p>
        <p>Email: support@birdsfly.com</p>
        <p>Phone: +91 7033214254</p>
      </div>
    </div>
  );
};

export default Help;
