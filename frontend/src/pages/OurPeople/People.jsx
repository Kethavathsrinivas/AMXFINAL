import React from "react";
import gif1 from "./ouremployees.gif";
import gif2 from "./nationalities.gif";
import gif3 from "./diversities.gif";
import gif4 from "./development.gif";
import "./People.css";
import bgvideo from "./aboutbg.mp4";

const People = () => {
  return (
    <>
      <div className=" peoplecontainer relative top-[60px] mb-[40px]">
        <div className="subcontainer1">
          <video autoPlay loop muted className="video-background1 ">
            <source src={bgvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          

          <div className="content">
            <div className="left-side1">
              <div className="point">
                <div className="rectangle"></div>
                <p className="text-white">WHO WE ARE/PEOPLE</p>
              </div>
              <p className="about-us">OUR PEOPLE</p>

              <p className="contact-info">
                <b>
                  <i>Contact us for </i>
                </b>
                <span className="contact-symbol">∞</span>
                <span className="contact-details">
                  <b>infinite possibilities</b>
                </span>
              </p>
              <p className="businessinfo">
                Business Solutions | Technology Solutions | Talent Solutions |
              </p>
            </div>

            <div className="right-side1">
              <p>We are here to make a difference</p>
              <p>
                through <b>people and technology</b> for
              </p>
              <p className="infinite">∞ infinite possibilities</p>
              <p className="socialmedia">
                Connect with us on: <b>in | X | f | Y | ✆ | ✉ | 🕸 |</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-section">
        <h1>We create a remarkable change, by hiring, celebrating and</h1>
        <h1>nurturing the best people from around the World.</h1>
        <p>
          We are here to make a difference through our people and solutions.
        </p>
        <p>
          We strongly believe in talented people and advanced technology,
          delivering excellence for the World Business needs.
        </p>
        <p>
          Leading our way in innovation for over 20 years, we build great future
          for business across multiple industries and countries.
        </p>
      </div>

      {/* New div for GIF images */}
      <div className="gif-section">
        <div className="gif-container">
          <img src={gif1} alt="GIF 1" />
          <p>
            <b>Our Employees</b>
          </p>
          <p>workforce globally distributed and effectively localized </p>
        </div>
        <div className="gif-container">
          <img src={gif2} alt="GIF 2" />
          <p>
            <b>Nationalities</b>
          </p>
          <p>our people represent across the globe</p>
        </div>
        <div className="gif-container">
          <img src={gif3} alt="GIF 3" />
          <p>
            <b>Diversity</b>
          </p>
          <p>women in workforce</p>
        </div>
        <div className="gif-container">
          <img src={gif4} alt="GIF 4" />
          <p>
            <b>Development</b>
          </p>
          <p>high on demand technology capabilities </p>
        </div>
      </div>
    </>
  );
};

export default People;
