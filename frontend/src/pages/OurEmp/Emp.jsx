import React from "react";
import "./Emp.css"; // Ensure you create this CSS file for styling
import logo from "./eservice.png";
import fullpic from "./leftside.png";

const Emp = () => {
  return (
    <div className="emp-container">
      {/* First Div with 2 Headings and 1 Paragraph */}
      <div className="text-section">
        <h1>
          <b>Employee Center</b>
        </h1>
        <h2>
          <b>
            HR | ER Help Desk | I-9 Form | E-Verify | Timesheets | Payroll |
          </b>
        </h2>
      </div>

      <div className="point">
        <div className="rectangle"></div>
        <p>
          For Employee Relations and Help Desk &gt;&gt; Contact us +1 (215)
          268-6168 or write an email to us at hr@amxsol.com
        </p>
      </div>

      {/* Second Div with Left Text and Right Image */}
      <div className="content-section">
        <div className="left-side">
          <p>
            AMXSOL enrolled with USCIS E-Verify system to obtain instant
            employment eligibility verification. In addition to completing I-9
            forms as part of verifying a new hire’s employment eligibility, many
            states require submitting information through USCIS online E-Verify
            system; all federal contractors are required to use E-Verify.
            <br /> E-Verify does not replace the requirement to complete I-9
            forms for new employees, but it does provide additional peace of
            mind knowing we are hiring eligible individuals in compliance with
            the state and federal laws.
          </p>
        </div>
        <div className="right-side">
          <img src={logo} alt="Right Side Image" />
        </div>
      </div>

      <div className="point">
        <div className="rectangle"></div>
        <p>
          <b>Notice to all our employees of E-Verify Participation</b>
        </p>
      </div>

      <div className="">
        <img src={fullpic} alt="Full-size" className="" />
      </div>
    </div>
  );
};

export default Emp;
