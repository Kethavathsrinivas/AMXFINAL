import React from 'react';
import './Ai.css';

const Ai = () => {
  return (
    <div className="ai-container relative top-[60px] mb-[40px]">
      <div className="ai-background">
        <div className="ai-content">
          <h1 className="ai-title">Artificial Intelligence</h1>
          <p className="ai-company">AMXSOL∞</p>
          <p className="ai-description">Contact us for ∞infinite possibilities</p>
          <p className="ai-services">
            Business Solutions | Technology Solutions | Talent Solutions |
          </p>
          <div className="ai-social">
            <span>Connect with us on: </span>
            <span className="ai-social-icons">
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

export default Ai;
