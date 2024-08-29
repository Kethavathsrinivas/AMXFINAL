import React from 'react';
import './CyberSecurity.css';

const CyberSecurity = () => {
  return (
    <div className="cyber-security-container">
      <div className="cyber-security-background">
        <div className="cyber-security-content">
          <h1 className="cyber-security-title">Cyber Security</h1>
          <p className="cyber-security-company">AMXSOL∞</p>
          <p className="cyber-security-description">Contact us for ∞infinite possibilities</p>
          <p className="cyber-security-services">
            Business Solutions | Technology Solutions | Talent Solutions |
          </p>
          <div className="cyber-security-social">
            <span>Connect with us on: </span>
            <span className="cyber-security-social-icons">
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

export default CyberSecurity;
