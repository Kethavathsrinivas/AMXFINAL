import React from 'react';
import './LegalSolutions.css';

const LegalSolutions = () => {
  return (
    <div className="legal-container">
      <div className="legal-background">
        <div className="legal-content">
          <h1 className="legal-title">Legal Solutions</h1>
          <h2 className="legal-subtitle">Legal Solutions | Legal Process Outsourcing</h2>
          <p className="legal-company">AMXSOL∞</p>
          <p className="legal-description">Contact us for ∞infinite possibilities</p>
          <p className="legal-services">
            Business Solutions | Technology Solutions | Talent Solutions |
          </p>
          <div className="legal-social">
            <span>Connect with us on: </span>
            <span className="social-icons">  <a href="https://www.linkedin.com/company/amxsol" target="_blank" rel="noopener noreferrer">| in |</a>
            <a href="https://x.com/amxsol?mx=2" target="_blank" rel="noopener noreferrer">X |</a>
            <a href="https://www.facebook.com/amxsol" target="_blank" rel="noopener noreferrer">f |</a>
            <a href="https://www.youtube.com/@amxsol" target="_blank" rel="noopener noreferrer">Y |</a>
            <a href="https://api.whatsapp.com/send?phone=your-number" target="_blank" rel="noopener noreferrer">✆ |</a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">✉ |</a>
            <a href="/your-other-page" target="_blank" rel="noopener noreferrer">🕸 |</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalSolutions;
