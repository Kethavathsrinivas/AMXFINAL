import React, { useState } from 'react';
import './Aerospace.css';

const Aerospace = () => {
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
        <h1 className="aerospace-title">Aerospace∞</h1>
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
            Revolutionizing the Aerospace Industry with Advanced Technologies...
          </p>
          {showDescription && (
            <div className="full-description">
              <h2>Our Expertise</h2>
              <p>
                <strong>Predictive Maintenance:</strong> Utilizing machine
                learning algorithms, we provide predictive maintenance solutions
                that help aerospace companies anticipate equipment failures
                before they occur. This proactive approach reduces downtime,
                lowers maintenance costs, and ensures the highest levels of
                safety and reliability.
              </p>
              <p>
                <strong>Advanced Materials and Manufacturing:</strong> We
                specialize in the development and application of advanced
                materials, including lightweight composites and high-strength
                alloys, to improve the performance and durability of aerospace
                components. Our state-of-the-art manufacturing techniques ensure
                precision and quality in every product we deliver.
              </p>
              <p>
                <strong>Autonomous Systems:</strong> Our autonomous systems
                enhance the capabilities of both manned and unmanned aerial
                vehicles. From automated flight control systems to advanced
                navigation technologies, we help our clients achieve greater
                operational efficiency and mission success.
              </p>
              <p>
                <strong>Aerospace Data Analytics:</strong> We harness the power
                of big data to provide actionable insights that drive
                decision-making in the aerospace sector. Our analytics solutions
                optimize flight operations, improve fuel efficiency, and enhance
                passenger experience.
              </p>
              <p>
                <strong>Safety and Compliance:</strong> Safety is paramount in
                the aerospace industry. Our comprehensive safety and compliance
                services ensure that our clients meet all regulatory
                requirements and maintain the highest standards of operational
                safety.
              </p>
              <h3>Key Benefits</h3>
              <p>
                Enhanced Operational Efficiency: Our solutions streamline
                processes and improve overall efficiency, leading to significant
                cost savings and improved performance.
              </p>
              <p>
                Increased Safety and Reliability: By leveraging advanced
                technologies, we enhance the safety and reliability of aerospace
                operations, reducing risks and ensuring compliance with industry
                standards.
              </p>
              <p>
                Innovation and Competitiveness: Our focus on innovation helps
                our clients stay ahead of the competition, driving growth and
                success in the dynamic aerospace market.
              </p>
              <h3>Success Stories</h3>
              <p>
                <strong>Case Study: Predictive Maintenance for Leading Airline</strong>
                <br />
                We partnered with a leading airline to implement a predictive
                maintenance solution that reduced unscheduled maintenance by
                30%, resulting in significant cost savings and improved fleet
                availability.
              </p>
              <p>
                <strong>Case Study: Autonomous Flight Control for Unmanned Aerial Vehicles (UAVs)</strong>
                <br />
                Our autonomous flight control system was successfully integrated
                into a fleet of UAVs, enhancing their operational capabilities
                and enabling new applications in surveillance and delivery
                services.
              </p>
              <h3>Partner with Us</h3>
              <p>
                At Amxsol, we are dedicated to driving the future of the
                aerospace industry. Our tailored solutions and industry
                expertise make us the partner of choice for aerospace companies
                seeking to innovate and excel.
              </p>
              <p>📞 Contact us ✉️ today to learn more about how we can help you achieve your aerospace goals.</p>
            </div>
          )}
          <button onClick={toggleDescription}>
            {showDescription ? "Read Less" : "Read More"}
          </button>
        </div>
      )}
    </div>

      {/* Help Section */}
      <div className="help-section">
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

          {/* <p className="looking-for">Looking for something else?</p> */}

          {/* Additional Buttons */}
          {/* <div className="button-column">
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
            <p className="industry-path">» INDUSTRIES / AEROSPACE</p>
          </div>
          <div className="industry-bottom-left">
            <h2>Aerospace∞</h2>
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

export default Aerospace;
