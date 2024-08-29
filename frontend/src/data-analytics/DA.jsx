import React from 'react';
import './DA.css';

const DA = () => {
  return (
    <div className="da-container">
      <div className="da-background">
        <div className="da-content">
          <h1 className="da-title">Data and Analytics</h1>
          <p className="da-company">AMXSOL∞</p>
          <p className="da-description">Contact us for ∞infinite possibilities</p>
          <p className="da-services">
            Business Solutions | Technology Solutions | Talent Solutions |
          </p>
          <div className="da-social">
            <span>Connect with us on: </span>
            <span className="da-social-icons">
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

export default DA;
