import React, { useState } from 'react';
import './Aerospace.css';

const Telecom = () => {
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
    <div id="aerospace" className="title-container">
      {/* Aerospace∞ Title with Expand/Collapse Feature */}
      <div className="aerospace-section">
      <div
        className="aerospace-header"
        onClick={toggleExpand}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <h1 className="aerospace-title">Telecom∞</h1>
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
       Telecom Industry Solutions
       </p>
       {showDescription && (
         <div className="full-description">
           <h2>Transforming Telecom Sector with Innovative Solutions</h2>
           <p>
             At AMXSOL∞, we understand the unique challenges and opportunities within the finance sector. Our comprehensive suite of solutions shall help navigate the complexities of the finance sector by providing industry-ready talent with solutions.
           </p>
         </div>
       )}
       <button onClick={toggleDescription}>
         {showDescription ? "Read Less" : "Read More"}
       </button>
     </div>
     
      )}
    </div>

      {/* Help Section */}
      <div className="telecom-help-section">
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
            <p className="industry-path">» INDUSTRIES / Telecom</p>
          </div>
          <div className="industry-bottom-left">
            <h2>Telecom∞</h2>
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

export default Telecom;
