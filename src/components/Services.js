import React from 'react';
import './Services.css';

const servicesData = [
  {
    icon: '📦',
    title: 'Fast Delivery',
    description: 'Get your products delivered quickly and on time.'
  },
  {
    icon: '💼',
    title: 'Professional Services',
    description: 'Top-notch services to help you find the best products.'
  },
  {
    icon: '🔄',
    title: 'Easy Returns',
    description: 'Hassle-free returns with our easy-to-use system.'
  },
  {
    icon: '📞',
    title: 'Customer Support',
    description: 'We’re here to help you 24/7 with any inquiries.'
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>We provide a wide range of services to make your shopping experience seamless and enjoyable.</p>
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
