// Routes.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
// import Navbar from "./Navbar/Navbar";
// import Navbar1 from "./Navbar/Navbar1";

// import Navbar from "./components/Navbar";

// import Navbar from "./components/Navbar";

import Home from "./Home";
import AboutUs from "./AboutUs";
import ServicePage1 from "./components/ServicePage1";
// import Footer from "./Footer";
import Talent from "./talent/talent";
// import App from "./App";
// import Navbar from "./components/Navbar";
import Business from "./Business/business";
// import TechApp from "./carrers/carrer";
import TechApp from "./tech/tech";
import CarrerApp from "./carrer/App";
// import Home from "./components/";
// import Navbar from "./newNav/Navbar/index";
// import Navbar from "./changednav/components/Navbar";
import ContactApp from "./contact/App";
// import ModernNav from "./ModernNav/ModernNav";
// import IndustrySection from "./industries/Industries";
import ServicePage12 from "./Academy_codes/Academy";
import FoundationApp from "./foundation/App";
import Aerospace from "./Amxsol_Industries/Industries/Aerospace";
import Automotive from "./Amxsol_Industries/Industries/Automotive";
import Banking from "./Amxsol_Industries/Industries/Banking";
import Newsroom from "./Amxsol_Industries/Newsroom/Newsroom";
// import Aerospace from "./Amxsol_Industries/Industries/Aerospace/Aerospace";
import Navbar from "./pages/Navbar/Navbar";

// 
import Digital from "./digitalsrc/Digital";
import LegalSolutions from "./legalSolutions/LegalSolutions";
import MitServices from "./mit-services/MitServices"

// import NewChemical from "./industry/Chemical"


import Chemical from "./industry/Chemical";
// import Industries from "./industry/Industries";
import Construction from "./industry/Construction";
import People from "./pages/OurPeople/People";
import Education from "./industry/Education";
import Energy from "./industry/Energy";
import Finance from "./industry/Finance";
import HealthCare from "./industry/HealthCare";
import Insurance from "./industry/Insurance";
import Manufacturing from "./industry/Manufacturing";
import Pharma from "./industry/Pharma";
import RealEstate from "./industry/RealEstate";
import RetailStore from "./industry/RetailStore";
import Software from "./industry/Software";
import Technology from "./industry/Technology";
import Telecom from "./industry/Telecom";
import Transportation from "./industry/Transportation";

import Ai from "./ai/Ai";
import Ml from "./ml/Ml";
import CloudServices from "./cloud services/CloudServices";
import CyberSecurity from "./cyber-security/CyberSecurity";
import BusinessIntelligence from "./business-intelligence/BusinessIntelligence";
import Academy from "./academysrc/Academy";
import Emp from "./pages/OurEmp/Emp";
import DA from "./data-analytics/DA";

import NewFooter from './pages/Footer/footer'

import Industries from "./industry/Industries";


const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      {/* <ModernNav/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="/talentservices" element={<ServicePage1 />} /> */}
        <Route path="/business" element={<Business />} />
        <Route path="/tech" element={<TechApp />} />
        <Route path="/career" element={<CarrerApp />} />
        <Route path="/services" element={<ServicePage1 />} />
        <Route path="/contact" element={<ContactApp />} />
        <Route path="/talent" element={<Talent />} />
        {/* <Route path="/industries" element={<Industries />} /> */}
        <Route path="/academy" element={<ServicePage12 />} />
        <Route path="/foundation" element={<FoundationApp />} />
        {/* <Route path="/aerospace" element={<Aerospace/>} /> */}
        <Route path="/aerospace" element={<Aerospace />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/digital" element={<Digital/>}/>
        <Route path="/legal" element={<LegalSolutions/>}/>
        <Route path="/mitservices" element={<MitServices/>}/>
        <Route path="/health" element={<HealthCare />} />


        <Route path="/chemical" element={<Chemical />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/People" element={<People />} />
        <Route path="/education" element={<Education />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/manufacture" element={<Manufacturing />} />
        <Route path="/pharma" element={<Pharma />} />
        <Route path="/estate" element={<RealEstate />} />
        <Route path="/store" element={<RetailStore />} />
        <Route path="/software" element={<Software />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/telecom" element={<Telecom />} />
        <Route path="/transportation" element={<Transportation />} />

        <Route path="/ai" element={<Ai />} />
        <Route path="/ml" element={<Ml />} />
        <Route path="/cloud" element={<CloudServices />} />
        <Route path="/cyber" element={<CyberSecurity />} />
        <Route path="/data" element={<DA />} />
        <Route path="/intellige" element={<BusinessIntelligence />} />
        <Route path="/academy" element={<Academy />} />

        <Route path="/employee" element={<Emp />} />


      </Routes>
      <NewFooter />
    </Router>
  );
};

export default AppRoutes;
