import React from 'react';
import './CloudServices.css';

const CloudServices = () => {
  return (
    <div className="cloud-services-container">
      <div className="cloud-services-background">
        <div className="cloud-services-content">
          <h1 className="cloud-services-title">Cloud Services</h1>
          <p className="cloud-services-company">AMXSOL∞</p>
          <p className="cloud-services-description">Contact us for ∞infinite possibilities</p>
          <p className="cloud-services-services">
            Business Solutions | Technology Solutions | Talent Solutions |
          </p>
          <div className="cloud-services-social">
            <span>Connect with us on: </span>
            <span className="cloud-services-social-icons">
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

export default CloudServices;
