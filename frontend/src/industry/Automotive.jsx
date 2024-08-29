import React, { useState } from 'react';
import './Aerospace.css';

const Automotive = () => {
  const [expanded, setExpanded] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [hovering, setHovering] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
    setShowDescription(false); // Collapse full description when toggling
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div id="aerospace" className="title-container relative top-[60px]">
      {/* Aerospace∞ Title with Expand/Collapse Feature */}
      <div className="aerospace-section">
      <div
        className="aerospace-header"
        onClick={toggleExpand}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <h1 className="aerospace-title">Automotive∞</h1>
        <span className="expand-icon">
          {expanded ? "∧" : "∨"}
        </span>
        {hovering && (
          <div className="expand-tooltip">
            {expanded ? "Collapse" : "Expand"}
          </div>
        )}
      </div>
      <hr className="section-divider" />

      {/* Expandable Content */}
      {expanded && (
        <div className="aerospace-content">
        <p>
          Our comprehensive automotive solutions leverage the latest technologies to enhance safety, efficiency, and connectivity on the road. From advanced driver assistance systems to autonomous driving, predictive maintenance, and connected vehicles, we are at the forefront of innovation in the automotive industry.
        </p>
        {showDescription && (
          <div className="full-description">
            <h2>Our Expertise</h2>
            <p>
              We work closely with industry partners to deliver cutting-edge solutions that meet the evolving needs of the automotive market. Our team of experts is dedicated to developing technologies that improve vehicle performance, reduce maintenance costs, and provide seamless connectivity for drivers and passengers alike.
            </p>
            <h3>Explore Our Automotive Solutions</h3>
            <p>
              <strong>Telematics:</strong> Integrating telecommunications and informatics for better fleet management.
            </p>
            <p>
              <strong>Electric Vehicles:</strong> Advancing electric vehicle technology for a sustainable future.
            </p>
            <p>
              <strong>Fleet Management:</strong> Optimizing fleet operations with real-time data and analytics.
            </p>
            <h3>Drive the Future with Us</h3>
            <p>
              Explore our range of automotive solutions and discover how we can help you drive the future of transportation. Our focus on safety, efficiency, and innovation ensures that our clients are equipped to meet the challenges of tomorrow’s mobility landscape.
            </p>
            <p>
              At Amxsol, we are committed to delivering technologies that redefine the automotive experience, ensuring vehicles are smarter, safer, and more connected than ever before.
            </p>
            <p>📞 Contact us ✉️ today to learn more about how we can help you transform your automotive business.</p>
          </div>
        )}
        <button onClick={toggleDescription}>
          {showDescription ? "Read Less" : "Read More"}
        </button>
      </div>
      
      )}
    </div>

      {/* Help Section */}
      <div className="automotive-help-section">
        <div className="help-bg">
          <p>We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.</p>

          {/* Button Section - Left Side */}
          <div className="button-column">
            <button className="solution-button" onClick={() => window.location.href = '/services'}>
              Business Solutions
            </button>
            <button className="solution-button" onClick={() => window.location.href = '/tech'}>
              Technology Solutions
            </button>
            <button className="solution-button" onClick={() => window.location.href = '/talent'}>
              Talent Solutions
            </button>
          </div>

          {/* <p className="looking-for">Looking for something else?</p>

          <div className="button-column">
            <button className="service-button" onClick={() => window.location.href='/contact'}>
              Request for Services
            </button>
            <button className="service-button" onClick={() => window.location.href = '/find-jobs'}>
              Find Jobs
            </button>
            <button className="service-button" onClick={() => window.location.href = '/hire-talent'}>
              Hire Talent
            </button>
          </div> */}
        </div>

        {/* Right-side Content */}
        <div className="right-content">
          <div className="industry-navigation">
            <p className="industry-path">» INDUSTRIES / AUTOMOTIVE</p>
          </div>
          <div className="industry-bottom-left">
            <h2>Automotive∞</h2>
            <h5>AMXSOL∞</h5>
          <span className='bs'>Contact us for</span>  ∞infinite possibilities 
            <p>Business Solutions | Technology Solutions | Talent Solutions |</p>
            <p>Connect with us on: <a href="https://www.linkedin.com/company/amxsol" target="_blank" rel="noopener noreferrer">| in |</a>
          <a href="https://x.com/amxsol?mx=2" target="_blank" rel="noopener noreferrer">X |</a>
          <a href="https://www.facebook.com/amxsol" target="_blank" rel="noopener noreferrer">f |</a>
          <a href="https://www.youtube.com/@amxsol" target="_blank" rel="noopener noreferrer">Y |</a>
          <a href="https://api.whatsapp.com/send?phone=your-number" target="_blank" rel="noopener noreferrer">✆ |</a>
          <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">✉ |</a>
          <a href="/your-other-page" target="_blank" rel="noopener noreferrer">🕸 |</a></p>
          </div>
        </div>
      </div>

      {/* Bottom Section with Industry List */}
      <div className="industry-bottom-section">
        <h2 className="industry-served-header">INDUSTRIES WE SERVE</h2>
        <p className="industry-served">
          Aerospace | Automotive | Banking | Chemicals | Construction | Education | Energy | Finance | Healthcare | Insurance | Manufacturing | Pharma | Retail & Wholesale | Real Estate | Software | Technology | Telecom | Transportation
        </p>
        <p className="industry-contact-info">
          Contact us for ∞infinite possibilities | Business Solutions | Technology Solutions | Talent Solutions | Service request | Website feedback | CSR | Media |
        </p>
        <p className="industry-connect-info">
          Connect with us on: <a href="https://www.linkedin.com/company/amxsol" target="_blank" rel="noopener noreferrer">| in |</a>
          <a href="https://x.com/amxsol?mx=2" target="_blank" rel="noopener noreferrer">X |</a>
          <a href="https://www.facebook.com/amxsol" target="_blank" rel="noopener noreferrer">f |</a>
          <a href="https://www.youtube.com/@amxsol" target="_blank" rel="noopener noreferrer">Y |</a>
          <a href="https://api.whatsapp.com/send?phone=your-number" target="_blank" rel="noopener noreferrer">✆ |</a>
          <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">✉ |</a>
          <a href="/your-other-page" target="_blank" rel="noopener noreferrer">🕸 |</a>
        </p>
      </div>
    </div>
  );
};

export default Automotive;
