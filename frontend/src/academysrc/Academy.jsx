import React, { useState } from 'react';
import './Academy.css';

// Manually import all 36 images
import ac1 from '../assets/academy/ac1.png';
import ac2 from '../assets/academy/ac2.png';
import ac3 from '../assets/academy/ac3.png';
import ac4 from '../assets/academy/ac4.png';
import ac5 from '../assets/academy/ac5.png';
import ac6 from '../assets/academy/ac6.png';
import ac7 from '../assets/academy/ac7.png';
import ac8 from '../assets/academy/ac8.png';
import ac9 from '../assets/academy/ac9.png';
import ac10 from '../assets/academy/ac10.png';
import ac11 from '../assets/academy/ac11.png';
import ac12 from '../assets/academy/ac12.png';
import ac13 from '../assets/academy/ac13.png';
import ac14 from '../assets/academy/ac14.png';
import ac15 from '../assets/academy/ac15.png';
import ac16 from '../assets/academy/ac16.png';
import ac17 from '../assets/academy/ac17.png';
import ac18 from '../assets/academy/ac18.png';
import ac19 from '../assets/academy/ac19.png';
import ac20 from '../assets/academy/ac20.png';
import ac21 from '../assets/academy/ac21.png';
import ac22 from '../assets/academy/ac22.png';
import ac23 from '../assets/academy/ac23.png';
import ac24 from '../assets/academy/ac24.png';
import ac25 from '../assets/academy/ac25.png';
import ac26 from '../assets/academy/ac26.png';
import ac27 from '../assets/academy/ac27.png';
import ac28 from '../assets/academy/ac28.png';
import ac29 from '../assets/academy/ac29.png';
import ac30 from '../assets/academy/ac30.png';
import ac31 from '../assets/academy/ac31.png';
import ac32 from '../assets/academy/ac32.png';
import ac33 from '../assets/academy/ac33.png';
import ac34 from '../assets/academy/ac34.png';
import ac35 from '../assets/academy/ac35.png';
import ac36 from '../assets/academy/ac36.png';

const Academy = () => {
  const [showDetailsMenu, setShowDetailsMenu] = useState(false);
  const [showReportOptions, setShowReportOptions] = useState(false);

  const toggleReportOptions = () => {
    setShowReportOptions(!showReportOptions);
  };

  const images = [
    ac1, ac2, ac3, ac4, ac5, ac6, ac7, ac8, ac9, ac10, ac11, ac12, ac13, ac14, ac15, ac16, ac17, ac18,
    ac19, ac20, ac21, ac22, ac23, ac24, ac25, ac26, ac27, ac28, ac29, ac30, ac31, ac32, ac33, ac34, ac35, ac36
  ];

  return (
    <div className="academy-container">
      {/* Background GIF */}
      <div className="academy-background">
        {/* Header Content at the Top Right */}
        <div className="academy-header">
          <div className="academy-logo-text">
            <h2>AMXSOL <span className='b1'>Acade</span><span className='r1'>my</span> ∞growUnlimited</h2>
            <p>Identify your Talent and build skills to achieve infinite possibilities.</p>
            <p>Contact us for ∞infinite possibilities</p>
            <div className="academy-links">
              <a href="/">Service request</a> | <a href="/">Website feedback</a> | <a href="/">CSR</a> | <a href="/">Media</a> |
              <div className="academy-social-icons">
                <span>Connect with us on:</span>  
                <a href="https://www.linkedin.com/company/amxsol" target="_blank" rel="noopener noreferrer">| in |</a>
                <a href="https://x.com/amxsol?mx=2" target="_blank" rel="noopener noreferrer">X |</a>
                <a href="https://www.facebook.com/amxsol" target="_blank" rel="noopener noreferrer">f |</a>
                <a href="https://www.youtube.com/@amxsol" target="_blank" rel="noopener noreferrer">Y |</a>
                <a href="https://api.whatsapp.com/send?phone=your-number" target="_blank" rel="noopener noreferrer">✆ |</a>
                <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">✉ |</a>
                <a href="/your-other-page" target="_blank" rel="noopener noreferrer">🕸 |</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Title and Description in the Center */}
        <div className="academy-main-content">
          <h1>AMXSOL <span className='b1'>ACADE</span><span className='r1'>MY</span></h1>
          <p>AMXSOL ACADEMY ∞growUnlimited | Identify your Talent and build skills to achieve infinite possibilities.</p>
          {/* Scroll Down Arrow */}
          <div className="scroll-arrow" onClick={() => document.getElementById('courses-section').scrollIntoView({ behavior: 'smooth' })}>
            &or;
          </div>
        </div>

        {/* Footer Details Section (Bottom Left) */}
       <div className="academy-footer" onClick={() => setShowDetailsMenu(!showDetailsMenu)}>
      <div className="details-icon" >
        ⋮
        {showDetailsMenu && (
          <div className="details-menu">
            <a href="https://workspace.google.com/products/sites/" target="_blank" rel="noreferrer">Google Sites</a>
            <button onClick={toggleReportOptions}>Report abuse</button>
            {showReportOptions && (
              <div className="report-options">
                <p>Report abuse<br />What would you like to report?</p>
                <button onClick={() => alert('You chose to report the entire site.')}>Entire Site</button>
                <button onClick={() => alert('You chose to report the current site.')}>Current Site</button>
                <button onClick={toggleReportOptions}>Close</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
      </div>

      {/* Below the Background GIF */}
      <section className="academy-info">
        <h2>Extraordinary expertise leads to remarkable results.</h2>
        <p>We share news, insights, analysis, and research tailored to your unique interests to help you deepen your knowledge and impact.</p>
      </section>

      {/* Courses Section */}
      <section id="courses-section" className="academy-courses">
        <h3>Courses for learners</h3>
        <p>Explore courses that are in demand</p>
        <div className="academy-courses-grid">
          {images.map((image, index) => (
            <div className="academy-course-card" key={index}>
              <img src={image} alt={`Course ${index + 1}`} />
              <p className="academy-course-title">{getCourseTitle(index)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Function to map image index to course title
const getCourseTitle = (index) => {
  const titles = [
    "AI", "Generative AI", "ChatGPT", "Machine Learning", "Data Science", "AWS Cloud",
    "HTML", "CSS", "RWD", "Bootstrap", "SASS", "Graphics",
    "Web Building", "Web Statistics", "Web Certificate", "Code Editor", "Cyber Security", "Web Server",
    "Python", "SQL", "MySQL", "PHP", "Java", "C",
    "C++", "C#", "ASP", "Node.js", "Git", "XML",
    "JavaScript", "React", "jQuery", "AngularJS", "AJAX", "AppML"
  ];
  return titles[index];
};

export default Academy;
