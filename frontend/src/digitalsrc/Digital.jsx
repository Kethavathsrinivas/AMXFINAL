import React from "react";
import "./Digital.css";

// Import all images
import mainGif from "../assets/digital/digital.gif";
import icon1 from "../assets/digital/icon1.png";
import icon2 from "../assets/digital/icon2.png";
import icon3 from "../assets/digital/icon3.png";
import gif1 from "../assets/digital/d1.gif";
import gif2 from "../assets/digital/d2.gif";
import gif3 from "../assets/digital/d3.gif";

const Digital = () => {
  return (
    <div className="digital-container">
      {/* Main Image Section */}
      <div className="gif-container-digital">
        <img src={mainGif} alt="Main GIF" className="main-gif-digital" />
        <div className="stay-tuned">Stay Tuned...</div>
        <div className="amxsol-digital">
          <h2>AMXSOL∞ DIGITAL</h2>
          <h5>
            Digital Solutions | Web Technologies | Web Development | Digital
            Engineering | Digital Marketing Services |
          </h5>
          <p>
            Contact us for ∞infinite possibilities
            <br />
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

      {/* Yellow Background Div with Icons and Title */}
      <div className="light-yellow-box">
        <div className="yellow-box-content">
          <div className="left-section-digital">
            <img src={icon1} alt="Icon 1" className="icon-image-digital" />
            <p className="specialty-title">Our specialties to serve you<span>∞</span></p>
          </div>
          <div className="right-section-digital">
            <img src={icon2} alt="Icon 2" className="icon-image-digital" />
            <img src={icon3} alt="Icon 3" className="icon-image-digital" />
          </div>
        </div>
      </div>

      {/* GIF Image Row Section */}
      <div className="gif-row-section">
        <div className="gif-item">
          <img src={gif1} alt="GIF 1" className="gif-image" />
          <p className="gif-title">BRANDING</p>
          <ul className="gif-subtexts">
            <li>Branding Service</li>
            <li>Logo Design</li>
            <li>Brand Identity</li>
            <li>Graphic Design</li>
            <li>Brand Marketing</li>
          </ul>
        </div>
        <div className="gif-item">
          <img src={gif2} alt="GIF 2" className="gif-image" />
          <p className="gif-title">WEB DESIGN</p>
          <ul className="gif-subtexts">
            <li>Custom Web Design</li>
            <li>WordPress Web Design</li>
            <li>Shopify Web Design</li>
            <li>eCommerce Web Design</li>
            <li>Other Web Design</li>
          </ul>
        </div>
        <div className="gif-item">
          <img src={gif3} alt="GIF 3" className="gif-image" />
          <p className="gif-title">MARKETING</p>
          <ul className="gif-subtexts">
            <li>SEO Services</li>
            <li>Social Media Marketing</li>
            <li>B2B Lead Generation</li>
            <li>Consulting Services</li>
            <li>Other Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Digital;
