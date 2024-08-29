import React from 'react';
import './BusinessIntelligence.css';

const BusinessIntelligence = () => {
  return (
    <div className="business-intelligence-container">
      <div className="business-intelligence-background">
        <div className="business-intelligence-content">
          <h1 className="business-intelligence-title">Business Intelligence</h1>
          <p className="business-intelligence-company">AMXSOL∞</p>
          <p className="business-intelligence-description">Contact us for ∞infinite possibilities</p>
          <p className="business-intelligence-services">
            Business Solutions | Technology Solutions | Talent Solutions |
          </p>
          <div className="business-intelligence-social">
            <span>Connect with us on: </span>
            <span className="business-intelligence-social-icons">
              <a href="https://www.linkedin.com/company/amxsol" target="_blank" rel="noopener noreferrer">| in |</a>
              <a href="https://x.com/amxsol?mx=2" target="_blank" rel="noopener noreferrer">X |</a>
              <a href="https://www.facebook.com/amxsol" target="_blank" rel="noopener noreferrer">f |</a>
              <a href="https://www.youtube.com/@amxsol" target="_blank" rel="noopener noreferrer">Y |</a>
              <a href="https://api.whatsapp.com/send?phone=your-number" target="_blank" rel="noopener noreferrer">✆ |</a>
              <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">✉ |</a>
              <a href="/your-other-page" target="_blank" rel="noopener noreferrer">🕸 |</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligence;
