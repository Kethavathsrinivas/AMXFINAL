import React from 'react';
import './Ml.css';

const Ml = () => {
  return (
    <div className="ml-container">
      <div className="ml-background">
        <div className="ml-content">
          <h1 className="ml-title">Machine Learning</h1>
          <p className="ml-company">AMXSOL∞</p>
          <p className="ml-description">Contact us for ∞infinite possibilities</p>
          <p className="ml-services">
            Business Solutions | Technology Solutions | Talent Solutions |
          </p>
          <div className="ml-social">
            <span>Connect with us on: </span>
            <span className="ml-social-icons">
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

export default Ml;
