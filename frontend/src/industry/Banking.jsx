import React, { useState } from 'react';
import './Aerospace.css';

const Banking = () => {
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
        <h1 className="aerospace-title">Banking∞</h1>
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
         Transforming Banking with Innovative Solutions
       </p>
       {showDescription && (
         <div className="full-description">
           <h2>Banking Industry Solutions</h2>
           <p>
             At AMXSOL∞, we understand the unique challenges and opportunities within the banking industry. Our comprehensive suite of solutions is designed to help banks navigate the complexities of the modern financial landscape, ensuring they stay ahead of the competition while providing exceptional service to their customers.
           </p>
           <h3>Our Services</h3>
           <p>
             <strong>Digital Banking Transformation:</strong>
           </p>
           <ul>
             <li>Seamless Customer Experience</li>
             <li>Mobile Banking</li>
             <li>Omni-channel Integration</li>
           </ul>
           <p>
             <strong>Risk Management and Compliance:</strong>
           </p>
           <ul>
             <li>Regulatory Compliance</li>
             <li>Fraud Detection and Prevention</li>
             <li>Risk Assessment</li>
           </ul>
           <p>
             <strong>Data Analytics and Insights:</strong>
           </p>
           <ul>
             <li>Customer Analytics</li>
             <li>Predictive Analytics</li>
             <li>Performance Metrics</li>
           </ul>
           <p>
             <strong>Cybersecurity Solutions:</strong>
           </p>
           <ul>
             <li>Threat Intelligence</li>
             <li>Secure Transactions</li>
             <li>Incident Response</li>
           </ul>
           <p>
             <strong>Financial Technology Integration:</strong>
           </p>
           <ul>
             <li>Fintech Collaboration</li>
             <li>API Management</li>
             <li>Blockchain Technology</li>
           </ul>
           <h3>Why Choose Us?</h3>
           <p>
             <strong>Expertise:</strong> Our team of industry experts has deep knowledge and experience in the banking sector.
           </p>
           <p>
             <strong>Innovation:</strong> We leverage the latest technologies to deliver innovative solutions that drive business growth.
           </p>
           <p>
             <strong>Customer-Centric Approach:</strong> We prioritize our clients' needs, ensuring our solutions are tailored to their unique requirements.
           </p>
           <p>
             <strong>Proven Track Record:</strong> We have a history of successful projects and satisfied clients in the banking industry.
           </p>
           <h3>Case Studies</h3>
           <p>
             <strong>Case Study 1: Enhancing Customer Engagement</strong>
             <br />
             We helped a leading bank transform its customer engagement strategy through a comprehensive digital platform, resulting in a 30% increase in customer satisfaction and a 20% growth in digital transactions.
           </p>
           <p>
             <strong>Case Study 2: Strengthening Cybersecurity</strong>
             <br />
             Our advanced cybersecurity solutions enabled a regional bank to detect and prevent fraud in real-time, reducing fraud-related losses by 40%.
           </p>
           <h3>Get in Touch</h3>
           <p>
             Ready to transform your banking operations? 📞 Contact us ✉️ today to learn how we can help you achieve your business goals.
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
      <div className="banking-help-section">
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
            <p className="industry-path">» INDUSTRIES / BANKING</p>
          </div>
          <div className="industry-bottom-left">
            <h2>Banking∞</h2>
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

export default Banking;
