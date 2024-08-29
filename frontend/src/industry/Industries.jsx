import React from 'react';
import './Industries.css';
import Aerospace from './Aerospace';
import Automotive from './Automotive';
import Banking from './Banking';
import Chemical from './Chemical';
import Construction from './Construction';
import Education from './Education';
import Energy from './Energy';
import Finance from './Finance';
import HealthCare from './HealthCare';
import Insurance from './Insurance';
import Manufacturing from './Manufacturing';
import Pharma from './Pharma';
import RetailStore from './RetailStore';
import RealEstate from './RealEstate';
import Software from './Software';
import Technology from './Technology';
import Telecom from './Telecom';
import Transportation from './Transportation';

const Industries = () => {
  return (
    <div>
      <div className="industry-container">
        {/* Background image */}
        <div className="industry-bg">
          {/* Left top section */}
          <div className="industry-left-top">
            <p className="industry-title">» WHAT WE DO / INDUSTRIES</p>
            <p className="industry-subtitle">
              Our industry experience and some of our clients from the sectors
            </p>
            <p className="industry-highlight">AMXSOL ∞infinite possibilities</p>
          </div>

          {/* Right bottom section */}
          <div className="industry-right-bottom">
            <h2 className="industry-header">Industries</h2>
            <p className="industry-amxsol">AMXSOL∞</p>
            <p className="industry-contact">Contact us for ∞infinite possibilities</p>
            <div className="industry-solutions">
              <span>Business Solutions | Technology Solutions | Talent Solutions |</span>
            </div>
            <div className="industry-connect">
              <span>Connect with us on: </span>
              <span className="industry-icons">
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

      {/* Additional content at the bottom */}
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
        <hr className='industry-horizontal'></hr>
      </div>

      <Aerospace/>

      <Automotive/>

      <Banking/>
      <Chemical/>
      <Construction/>
      <Education/>
      <Energy/>
      <Finance/>
      <HealthCare/>
      <Insurance/>
      <Manufacturing/>
      <Pharma/>
      <RetailStore/>
      <RealEstate/>
      <Software/>
      <Technology/>
      <Telecom/>
      <Transportation/>
    </div>
  );
};

export default Industries;
