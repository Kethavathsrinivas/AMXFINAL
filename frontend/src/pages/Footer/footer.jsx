// import React from "react";
import amxsolImage from "./amxsol.png";
import "./footer.css";

import React, { useState, useEffect } from "react";
import SubContent from "./SubContent";
import {
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaVoicemail,
  FaInstagram,
} from "react-icons/fa";
import bgimg from "./video/background.mp4";

const Footer = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 1000);
  }, []);

  const [content] = useState([
    {
      title: "Industries",
      subItems: [
        "Aerospace",
        "Automotive",
        "Banking",
        "Chemicals",
        "Construction",
        "Education",
        "Energy",
        "Finance",
        "HealthCare",
        "Insurance",
        "Manufacturing",
        "Pharma",
        "Retail & Wholesale",
        "RealEstate",
        "Software",
        "Technology",
        "Telecom",
        "Transportation",
      ],
      links: [
        "/aerospace",
        "/automotive",
        "/banking",
        "/chemical",
        "/construction",
        "/education",
        "/energy",
        "/finance",
        "/healthcare",
        "/insurance",
        "/manufacture",
        "/pharma",
        "/store",
        "/estate",
        "/software",
        "/technology",
        "/telecom",
        "/transportation",
      ],
    },
    {
      title: "Capabilities",
      subItems: [
        "Artificial Intelligence",
        "Cloud Solutions",
        "Cyber Security",
        "Data and Analytics",
        "Digital Engineering",
        "Enterprise Solutions",
        "Finance and Risk Management",
        "Network Solutions and Services",
        "Private Equity",
        "Sales and Commerce",
        "Strategic Managed Services",
        "Supply Chain",
        "Talent Solutions",
        "Web Technologies",
      ],
      links: [
        "/ai",
        "/cloud",
        "/cyber",
        "/data",
        "/digital",
        "/industries",
        "/finance",
        "/tech",
        "/",
        "/store",
        "/talent",
        "/",
        "/talent",
        "/foundation",
      ],
    },
    {
      title: "What we do",
      subItems: [
        "AMXSOL Business Solutions",
        "AMXSOL Technology Solutions",
        "AMXSOL Talent Solutions",
        "AMXSOL MIT Services",
        "AMXSOL Digital",

        "AMXSOL Security",

        "AMXSOL BPO",
        "AMXSOL Health Care",
        "AMXSOL Legal",
      ],
      links: ["/services", "/tech", "/talent", "/mitservices", "/digital", "/", "/services", "/health", "/legal"],
    },
    {
      title: "Who we are",
      subItems: [
        "About AMXSOL",
        "People",
        "Careers",
        "NewsRoom",
        "AMXSOL Foundation",
        "AMXSOL Academy",
        "Contact Us",
        "AMXSOL USA",
        "AMXSOL INDIA",
        "AMXSOL KSA",
      ],
      links: [
        "/aboutus",
        "/people",
        "/career",
        "/newsroom",
        "/foundation",
        "/academy",
        "/contact",
        "/contact",
        "/contact",
        "/contact",
      ],
    },
  ]);

  return (
    <>
      <footer>
        <div>
          <div>
            <div className="mainheadfooter">
              <div className="leftfooter">
                <div>
                  <h1 className="">
                    AMXSOL worldwide contact us for ∞
                    <i>infinite possibilities</i>{" "}
                  </h1>
                  <p className="text-black">
                    Connect with us on:{" "}
                    <a
                      href="https://www.linkedin.com/company/amxsol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black"
                    >
                      | in |
                    </a>
                    <a
                      href="https://x.com/amxsol?mx=2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black"
                    >
                      X |
                    </a>
                    <a
                      href="https://www.facebook.com/amxsol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black"
                    >
                      f |
                    </a>
                    <a
                      href="https://www.youtube.com/@amxsol"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Y |
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=your-number"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black"
                    >
                      ✆ |
                    </a>
                    <a
                      href="mailto:your-email@example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black"
                    >
                      ✉ |
                    </a>
                    <a
                      href="/your-other-page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black"
                    >
                      🕸 |
                    </a>
                  </p>
                </div>
                <div>
                  <h1>AMXSOL USA Global Corporate Headquarters</h1>
                  <p className="text-black">
                    1000 Northbrook Drive, Suite 100, Trevose PA 19053 USA |
                    <a
                      href="https://www.linkedin.com/company/amxsol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black mx-[10px]"
                    >
                      +1​ (215) 268-6168 {"  "} |
                    </a>
                    <a
                      href="https://x.com/amxsol?mx=2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black mx-[10px]"
                    >
                      info@amxsol.com |
                    </a>
                    <a
                      href="https://www.facebook.com/amxsol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black mx-[10px]"
                    >
                      f |
                    </a>
                    <a
                      href="https://www.youtube.com/@amxsol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black mx-[10px]"
                    >
                      www.amxsol.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="rightfooter">
                <img src={amxsolImage} className="h-[50px] w-[200px]" />
                <p>
                  ∞<i>infinite possibilities</i>
                </p>
              </div>
            </div>
            <div className="mainheadfooter1">
              <div className="submainfooter1">
                <h1>AMXSOL INDIA Global Research & Delivery Center</h1>
                <p className="text-black">
                  N Heights, Hitech City, Hyderabad TG 500090 INDIA
                  <br />
                  <a
                    href="https://www.linkedin.com/company/amxsol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black mx-[10px]"
                  >
                    +91​ 81793 82764 {"  "} |
                  </a>
                  <a
                    href="https://x.com/amxsol?mx=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black mx-[10px]"
                  >
                    info@amxsol.com |
                  </a>
                  <a
                    href="https://www.youtube.com/@amxsol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black mx-[10px]"
                  >
                    www.amxsol.com
                  </a>
                </p>
              </div>
              <div className="submainfooter1">
                <h1>AMXSOL KSA Business Development Research Facility</h1>
                <p className="text-black">
                  Building# 3248, C16 St, Al Aqrabiyah, Al Khobar 34445, Kingdom
                  of SAUDI ARABIA
                  <br />
                  <a
                    href="https://www.linkedin.com/company/amxsol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black mx-[10px]"
                  >
                    +966 53 298 9548 {"  "} |
                  </a>
                  <a
                    href="https://x.com/amxsol?mx=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black mx-[10px]"
                  >
                    info@amxsol.com |
                  </a>
                  <a
                    href="https://www.youtube.com/@amxsol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black mx-[10px]"
                  >
                    www.amxsol.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer relative z-0">
          <video autoPlay loop muted className="background-video rounded-lg">
            <source src={bgimg} type="video/mp4" />
          </video>

          <div className="footer-content grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 m-10 pl-3">
            {content.map((item, index) => (
              <SubContent
                key={index}
                title={item.title}
                subItems={item.subItems}
                links={item.links}
              />
            ))}
          </div>

          <div className="footer-content h-0.5 bg-green-100 m-10"></div>

          <div className="footer-icons flex justify-center space-x-5 py-2.5 mx-10 rounded-md">
            {/* <div className={`content1 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaLinkedin /></a></div> */}
            {/* <div className={`content1 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaFacebook /></a></div> */}
            {/* <div className={`content1 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaTwitter /></a></div> */}
            {/* <div className={`content2 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaWhatsapp /></a></div> */}
            {/* <div className={`content2 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaYoutube /></a></div> */}
            {/* <div className={`content2 ${showContent ? 'slide-in1' : ''}`}><a href="#"><FaVoicemail /></a></div> */}

            {/* <div className="cardf">
            <div className="background"></div>
                    <div className="logo">
                        Socials
                      </div>

                <a href="#"><div className="box box1"><span className="icon">
                </span></div></a>

                <a href="##"><div className="box box2"> <span className="icon">
                </span></div></a>

                <a href="###"><div className="box box3"><span className="icon">
                </span></div></a>

                <a href="###"><div className="box box4"><span className="icon">
                </span></div></a>

                <a href="###"><div className="box box5"><span className="icon">
                </span></div></a>

                <a href="#"><div className="box box6"><span className="icon">
                <FaVoicemail  color="black"/>
                </span></div></a>

            </div>
        </div> */}

            <div className="card_i flex">
              <img src={amxsolImage} className="h-[30px] w-[100px]" />
              {/* <a
              href="https://www.linkedin.com/company/amxsol"
              className="socialContainer containerOne"
            >
              <FaLinkedin color="black" />
            </a>

            <a
              href="https://www.facebook.com/amxsol"
              class="socialContainer containerTwo"
            >
              <FaFacebook color="black" />
            </a>

            <a
              href="https://x.com/amxsol"
              class="socialContainer containerThree"
            >
              <FaTwitter color="black" />
            </a> */}

              {/* <a href="https://whatsapp.com/channel/0029Vad8BxA1dAwCpJZtys2V"> */}
              {/* <a
              href="https://whatsapp.com/channel/0029Vad8BxA1dAwCpJZtys2V"
              class="socialContainer containerFour"
            >
              <FaWhatsapp color="black" />
            </a>

            <a
              href="https://www.youtube.com/@amxsol"
              class="socialContainer containerFive"
            >
              <FaYoutube color="black" />
            </a>

            <a href="#" class="socialContainer containerOne">
              <FaInstagram color="black" />
            </a> */}
            </div>
          </div>
          <div className="copyright-container  text-center py-3 text-sm text-white m-10">
            COPYRIGHT &copy; 2022 - 2024 ,AMXSOL ALL RIGHTS RESERVED PRIVACY
            POLICY. All rights reserved.
          </div>

          <div className="h-[30px]"></div>
        </footer>
      </footer>
    </>
  );
};

export default Footer;
