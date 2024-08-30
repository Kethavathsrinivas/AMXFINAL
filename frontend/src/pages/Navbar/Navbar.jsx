import React, { useState } from "react";
import "./Navbar.css";
// import infinity1 from "./infinity1.gif";
// import imgamx from "../../assets/infinity1.png"; // Adjust the path if needed
import imgamx from "./amxsol.png";
import inimg from "./in.png";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  SearchIcon,
  XIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import useWindowSize from "./useWindow";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(null);
  const [issubClicked, setIsSubClicked] = useState(null);
  const [isSearch, setIsSearch] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const size = useWindowSize();


  // const openSidebar = () => {
  //   setIsOpen(true);
  // };

  // const closeSidebar = () => {
  //   setIsOpen(false);
  //   document.body.classList.remove('no-scroll');
  // };

  // console.log(size);
  // console.log(isMenuOpen);

  const [ismenuClick, setMenuClick] = useState(null);
  const [isSubmenuClick, setSubMenuClick] = useState(null);

  const [isSubSubClick, setSubSubClick] = useState(null);

  const handlesubsub = (num, mainnum) => {
    console.log(num, mainnum);

    setSubSubClick((prevSubSubClick) => {
      const newSubSubClick = num === prevSubSubClick ? null : num;
      console.log("New SubSubClick:", newSubSubClick);

      setIsSubClicked(newSubSubClick === null ? mainnum : null);
      console.log("New SubClicked:", newSubSubClick === null ? null : mainnum);

      return newSubSubClick;
    });
  };

  const handleMenuClick = (num) => {
    setMenuClick((prevnum) => (num !== prevnum ? num : null));
    setSubMenuClick(null);
  };

  const handleSubMenuClick = (num) => {
    setSubMenuClick((prevnum) => (num !== prevnum ? num : null));
  };

  const handleClick = (num) => {
    setIsClicked((prevnum) => (num !== prevnum ? num : null));
    setIsSubClicked(null);
  };

  const handleSubClick = (num, mainnum) => {
    // console.log(issubClicked, num);
    // const newnum = num*10+mainnum;
    setIsSubClicked((prevnum) => (num !== prevnum ? num : null));
    // console.log(issubClicked, "sub click", mainnum);
    setIsClicked(issubClicked === null ? null : mainnum);
    console.log(isClicked, "ex");
  };

  return (
    <>
      {size.screenWidth >= 1100 && (
        <>
          <nav className="h-[60px] w-full bg-black fixed z-1000">
            <div className="leftnav box-border h-[60px] flex justify-center align-center pt-[10px]">
              <Link to="/" onClick={() => handleClick(null)}>
              <img
                src={imgamx}
                className="relative h-[30px] w-[100px]  box-border m-auto"
              />
              </Link>
              {/* <a
                href="#"
                className="mainhead bolder  not-italic text-s flex pt-[8px]"
              >
                <span>
                  <img src={inimg} className="h-[20px] ml-[8px] mt-[8px]" />
                </span>
                infinite possibilities

              </a> */}
            </div>

            <div className="rightnav ">
              <ul className="rightnav_ul">
                {/* <li className="">
                  <a
                    href="/"
                    className="not-italic font-mono  text-color headsize"
                    onClick={() => handleClick(null)}
                  >
                    Home
                  </a>
                </li> */}

                <li>
                  <li className="relative">
                    <Link
                      className="flex items-center not-italic  text-color headsize"
                      onClick={() => handleClick(1)}
                    >
                      What we do
                      {isClicked === 1 ? (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                      )}
                    </Link>
                  </li>
                  <div>
                    {isClicked === 1 && (
                      <div className="aligning_sub absolute top-[60px]  bg-black  w-[280px] h-auto">
                        <ul className="flex flex-col">
                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(1, 1)}
                                >
                                  <ChevronDownIcon className=" h-5 w-5" />
                                </Link>
                              </div>

                              <div>
                                <Link
                                  to={"/services"}
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Business Solutions{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(2, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link
                                  to={"/tech"}
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Technology Solutions{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(3, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link
                                  to="/talent"
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Talent Solutions{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(4, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link className="text-color text-lg">
                                  {" "}
                                  Capabilities{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(5, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link
                                  to="/industries"
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Industries{" "}
                                </Link>
                              </div>
                            </li>
                          </li>
                        </ul>
                      </div>
                    )}
                    {issubClicked === 1 && (
                      <div className="absolute subsub top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(1, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Business Solutions{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link
                              to="/digital"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Digital
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to={"/legal"}
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Legal Solutions
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to={"/business"}
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Business Impact
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 2 && (
                      <div className="absolute top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(2, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Technology Solutions{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link
                                to="/mitservices"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                MIIT Services
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 3 && (
                      <div className="absolute top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(3, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Talent Solutions{" "}
                              </Link>
                            </div>
                          </li>

                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                IT Consulting
                              </Link>
                            </li>
                            <li className="">
                              <Link to="/healthcare" className="text-color" onClick={() => handleClick(null)}>
                                HealthCare
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 4 && (
                      <div className="absolute top-[60px] bg-black overflow-y-scroll h-[80vh]">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(4, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Capabilities{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0 top-[30px]  bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link
                                to="/ai"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Artificial Intelligence
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/ml"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Machine Learning
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/intellige"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Business Intelligence
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/cloud"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Cloud Services
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/cyber"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Cyber Security
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/data"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Data and Analytics
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/legal"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Legal Process Outs...
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/services"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Business Process...
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/talent"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Recruitment Process...
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/talent"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Finance and Risk M...
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/talent"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Accounting Services
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/talent"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Payroll Services
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/academy"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Technology Training
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 5 && (
                      <div className="absolute top-[60px] bg-black p-[10px] overflow-y-scroll h-[80vh]">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(5, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link
                                to="/industries"
                                className="text-color text-lg"
                                onClick={() => handleClick(null)}
                              >
                                {" "}
                                Industries{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0 bg-black top-[140px] w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link
                                to="/aerospace"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Aerospace
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/automotive"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Automotive
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/banking"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Banking
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/chemical"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Chemicals
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/construction"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Construction
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/education"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Education
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/energy"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Energy
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/finance"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Finance
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to={"/health"}
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                HealthCare
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/insurance"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Insurance
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to={"/manufacture"}
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Manufacturing
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/pharma"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Pharma
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/store"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Retail & Wholesale
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/estate"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Real Estate
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/software"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Software
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/technology"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Technology
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/telecom"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Telecom
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/transportation"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Transportation
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                <li>
                  <li className="relative">
                    <Link
                      className="flex items-center not-italic  headsize text-color"
                      onClick={() => handleClick(2)}
                    >
                      Who we are
                      {isClicked === 2 ? (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                      )}
                    </Link>
                  </li>
                  {isClicked === 2 && (
                    <div className="aligning_sub absolute top-[60px]  bg-black  w-[280px] h-auto">
                      <ul className="flex flex-col">
                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="ml sub">
                              <Link
                                to={"/aboutus"}
                                className="text-color text-lg"
                                onClick={() => handleClick(null)}
                              >
                                {" "}
                                About Us{" "}
                              </Link>
                            </div>
                          </li>
                        </li>

                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(6, 2)}
                              >
                                {issubClicked ? (
                                  <ChevronUpIcon className=" h-5 w-5 bold" />
                                ) : (
                                  <ChevronDownIcon className=" h-5 w-5" />
                                )}
                              </Link>
                            </div>

                            <div className="">
                              <Link
                                to="/people"
                                className="text-color text-lg"
                                onClick={() => handleClick(null)}
                              >
                                {" "}
                                People{" "}
                              </Link>
                            </div>
                          </li>
                        </li>

                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="sub">
                              <Link
                                to="/career"
                                className="text-color text-lg"
                                onClick={() => handleClick(null)}
                              >
                                {" "}
                                Careers{" "}
                              </Link>
                            </div>
                          </li>
                        </li>

                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="sub">
                              <Link
                                to={"/newsroom"}
                                className="text-color text-lg"
                                onClick={() => handleClick(null)}
                              >
                                Newsroom
                              </Link>
                            </div>
                          </li>
                        </li>

                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="sub">
                              <Link
                                to="/foundation"
                                className="text-color text-lg"
                                onClick={() => handleClick(null)}
                              >
                                {" "}
                                Foundation{" "}
                              </Link>
                            </div>
                          </li>
                        </li>

                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="sub">
                              <Link
                                to="/academy"
                                className="text-color text-lg"
                                onClick={() => handleClick(null)}
                              >
                                {" "}
                                Academy{" "}
                              </Link>
                            </div>
                          </li>
                        </li>

                        {/* <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="sub">
                              <Link
                                className="text-color text-lg"
                                onClick={() => handleClick(null)}
                                to="/contact"
                              >
                                {" "}
                                Contact Us{" "}
                              </Link>
                            </div>
                          </li>
                        </li> */}
                      </ul>
                    </div>
                  )}
                  {issubClicked === 6 && (
                    <div className="absolute sub_nav top-[60px] bg-black">
                      <li className="relative ">
                        <li className=" flex w-full ">
                          <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                            <Link
                              className="text-lg text-color"
                              onClick={() => handleSubClick(6, 2)}
                            >
                              <ChevronRightIcon className=" h-5 w-5" />
                            </Link>
                          </div>

                          <div>
                            <Link className="text-color text-lg"> People </Link>
                          </div>
                        </li>
                      </li>
                      <div className="aligning  relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                        <ul>
                          <li className="">
                            <Link
                              to={"/employee"}
                              className="text-color"
                              onClick={() => handleClick(null)}
                            >
                              Eployee Center
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>

                <li className="">
                  <a
                    href="/career"
                    className=" headsize text-color"
                    onClick={() => handleClick(null)}
                    style={{fontWeight:""}}
                  >
                    Careers
                  </a>
                </li>

                <li className="">
                  <a
                    href="/newsroom"
                    className=" headsize text-color"
                    onClick={() => handleClick(null)}
                    style={{fontWeight:""}}
                  >
                    Newsroom
                  </a>
                </li>

                <li className="">
                  {/*  */}
                  <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              

                              <div>
                                <Link
                                  to={"/contact"}
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Contact Us{" "}
                                </Link>
                              </div>
                              {/* <div className=" h-[20px] w-[20px] my-[5px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleClick( 3)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div> */}
                            </li>
                          </li>

                  {/*  */}
                  
                  {/* <li className="relative">
                    <Link
                      className="flex items-center not-italic  headsize text-color"
                      onClick={() => handleClick(3)}
                    >
                      Contact Us
                      {isClicked === 3 ? (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                      )}
                    </Link>
                  </li> */}
                  {isClicked === 3 && (
                    <div className=" absolute top-[60px]  bg-black  w-[165px] h-auto right-[20px]">
                      <ul className="flex flex-col m-auto">
                        <li className="">
                          <li className="my-[20px] flex w-[165px] ">
                            <div className="">
                              <Link
                                className="text-color text-lg"
                                onClick={() => handleClick(null)}
                              >
                                AMXSOL India
                              </Link>
                            </div>
                          </li>
                        </li>

                       
                      </ul>
                    </div>
                  )}
                </li>

                <li>
                  <div>
                    <SearchIcon
                      className="h-6 w-6 text-gray-500"
                      onClick={() => setIsSearch(true)}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <nav
            className={`absolute h-[80px] w-full bg-blue-100 top-0 flex justify-center align-center items-center  px-4 search_nav ${
              isSearch ? "show1" : "hide"
            }`}
          >
            <div>
              <ChevronLeftIcon
                className="w-[30px] h-[30px] cursor-pointer"
                onClick={() => setIsSearch(false)}
              />
            </div>
            <div className="relative  ml-4">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-[500px] h-[40px] pl-10 pr-10 rounded-md border border-gray-300"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {searchText && (
                <XIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer"
                  onClick={() => setSearchText("")}
                />
              )}
            </div>
          </nav>
        </>
      )}

      {size.screenWidth < 1100 && size.screenWidth > 768 && (
        <>
          <nav className="h-[60px] w-full bg-black fixed z-10">
            <div className="leftnav box-border h-[60px] flex justify-center align-center pt-[10px]">
              <Link to="/" onClick={() => handleClick(null)}>
              <img
                src={imgamx}
                className="relative  h-[30px] w-[100px]  box-border m-auto"
              />
              </Link>
              {/* <a
                href="#"
                className="mainhead bolder  not-italic text-s flex pt-[8px]"
              >
                <span>
                  <img src={inimg} className="h-[20px] ml-[8px] mt-[8px]" />
                </span>
                infinite possibilities
              </a> */}
            </div>

            <div className="rightnav ">
              <ul className="rightnav_ul">
                {/* <li className="">
                  <a
                    href="/"
                    className="not-italic font-mono  text-color headsize"
                    onClick={() => handleClick(null)}
                  >
                    Home
                  </a>
                </li> */}

                <li>
                  <li className="relative">
                    <Link
                      className="flex items-center not-italic  text-color headsize"
                      onClick={() => handleClick(1)}
                    >
                      What we do
                      {isClicked === 1 ? (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                      )}
                    </Link>
                  </li>
                  <div>
                    {isClicked === 1 && (
                      <div className="aligning_sub absolute top-[60px]  bg-black  w-[280px] h-auto">
                        <ul className="flex flex-col">
                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(1, 1)}
                                >
                                  <ChevronDownIcon className=" h-5 w-5" />
                                </Link>
                              </div>

                              <div>
                                <Link
                                  to={"/services"}
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  Business Solutions{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(2, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link
                                  to={"/tech"}
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Technology Solutions{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(3, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link
                                  to="/talent"
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Talent Solutions{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(4, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link className="text-color text-lg">
                                  {" "}
                                  Capabilities{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(5, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link
                                  to="/industries"
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Industries{" "}
                                </Link>
                              </div>
                            </li>
                          </li>
                        </ul>
                      </div>
                    )}
                    {issubClicked === 1 && (
                      <div className="absolute subsub top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(1, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                Business Solutions{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link
                                to="/digital"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Digital
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to={"/legal"}
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Legal Solutions
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to={"/business"}
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Business Impact
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 2 && (
                      <div className="absolute top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(2, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Technology Solutions{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link
                              to="/mitservices"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                MIIT Services
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 3 && (
                      <div className="absolute top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(3, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Talent Solutions{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                IT Consulting
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/healthcare"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                HealthCare
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 4 && (
                      <div className="absolute top-[60px] bg-black ">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(4, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Capabilities{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link
                                to="/ai"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Artificial Intelligence
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/ml"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Machine Learning
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/intellige"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Business Intelligence
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/cloud"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Cloud Services
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/cyber"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Cyber Security
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/data"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Data and Analytics
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/legal"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Legal Process Outs...
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/services"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Business Process...
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/talent"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Recruitment Process...
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/talent"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Finance and Risk M...
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/talent"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Accounting Services
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/talent"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Payroll Services
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/academy"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Technology Training
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 5 && (
                      <div className="absolute top-[60px] bg-black p-[10px] overflow-y-scroll h-[80vh]">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(5, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link
                                to="/industries"
                                className="text-color text-lg"
                                onClick={() => handleClick(null)}
                              >
                                {" "}
                                Industries{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0 bg-black top-[120px] w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link
                                to="/aerospace"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Aerospace
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/automotive"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Automotive
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/banking"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Banking
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/chemical"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Chemicals
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/construction"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Construction
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/education"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Education
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/energy"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Energy
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/finance"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Finance
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to={"/healthcare"}
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                HealthCare
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/insurance"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Insurance
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/manufacture"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Manufacturing
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/pharma"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Pharma
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/store"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Retail & Wholesale
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/estate"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Real Estate
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/software"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Software
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/technology"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Technology
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/telecom"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Telecom
                              </Link>
                            </li>
                            <li className="">
                              <Link
                                to="/transportation"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Transportation
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                {size.screenWidth < 1100 && size.screenWidth > 970 && (
                  <li>
                    <li className="relative">
                      <Link
                        className="flex items-center not-italic  headsize text-color"
                        onClick={() => handleClick(2)}
                      >
                        Who we are
                        {isClicked === 2 ? (
                          <ChevronUpIcon className="ml-2 h-5 w-5" />
                        ) : (
                          <ChevronDownIcon className="ml-2 h-5 w-5" />
                        )}
                      </Link>
                    </li>
                    {isClicked === 2 && (
                      <div className="aligning_sub absolute top-[60px]  bg-black  w-[280px] h-auto">
                        <ul className="flex flex-col">
                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="ml sub">
                                <Link
                                  to="/aboutus"
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  About Us{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(6, 2)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div className="">
                                <Link
                                  to="/people"
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  People{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="sub">
                                <Link
                                  to="/career"
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Careers{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="sub">
                                <Link
                                  to="/newsroom"
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Newsroom{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="sub">
                                <Link
                                  to="/foundation"
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Foundation{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="sub">
                                <Link
                                  to="/academy"
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Academy{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="sub">
                                <Link
                                  to="/contact"
                                  className="text-color text-lg"
                                  onClick={() => handleClick(null)}
                                >
                                  {" "}
                                  Contact Us{" "}
                                </Link>
                              </div>
                            </li>
                          </li>
                        </ul>
                      </div>
                    )}
                    {issubClicked === 6 && (
                      <div className="absolute sub_nav top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(6, 2)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                People{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning  relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link
                                to="/employee"
                                className="text-color"
                                onClick={() => handleClick(null)}
                              >
                                Eployee Center
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                )}

                {size.screenWidth < 1100 && size.screenWidth > 1030 && (
                  <li className="">
                    <a
                      href="/career"
                      className="not-italic font-mono headsize text-color"
                      onClick={() => handleClick(null)}
                    >
                      Careers
                    </a>
                  </li>
                )}

                {size.screenWidth < 1100 && size.screenWidth > 1060 && (
                  <li className="">
                    <a
                      href="/newsroom"
                      className="not-italic font-mono headsize text-color"
                      onClick={() => handleClick(null)}
                    >
                      Newsroom
                    </a>
                  </li>
                )}

                <li>
                  <li className="relative">
                    <Link
                      className="flex items-center not-italic  text-color headsize"
                      onClick={() => handleClick(3)}
                    >
                      more
                      {isClicked === 3 ? (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                      )}
                    </Link>
                  </li>

                  <div>
                    {isClicked === 3 && size.screenWidth < 1100 && (
                      <div className="aligning_sub absolute top-[60px]  bg-black  w-[280px] h-auto right-[20px]">
                        <ul className="flex flex-col">
                          {size.screenWidth <= 970 &&
                            size.screenWidth > 768 && (
                              <li className="aligning">
                                <li className="my-[20px] flex w-full ">
                                  <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                    <Link
                                      className="text-lg text-color"
                                      onClick={() => handleSubClick(9, 3)}
                                    >
                                      {issubClicked ? (
                                        <ChevronUpIcon className=" h-5 w-5 bold" />
                                      ) : (
                                        <ChevronDownIcon className=" h-5 w-5" />
                                      )}
                                    </Link>
                                  </div>

                                  <div>
                                    <Link className="text-color text-lg">
                                      {" "}
                                      Who we are{" "}
                                    </Link>
                                  </div>
                                </li>
                              </li>
                            )}

                          {size.screenWidth <= 1030 &&
                            size.screenWidth > 768 && (
                              <li className="aligning">
                                <li className="my-[20px] flex w-full pl-[20px]">
                                  <div>
                                    <Link
                                      to="/career"
                                      className="text-color text-lg"
                                    >
                                      {" "}
                                      Carrers{" "}
                                    </Link>
                                  </div>
                                </li>
                              </li>
                            )}

                          {size.screenWidth <= 1060 &&
                            size.screenWidth > 768 && (
                              <li className="aligning">
                                <li className="my-[20px] flex w-full pl-[20px]">
                                  <div>
                                    <Link
                                      to="/newsroom"
                                      className="text-color text-lg"
                                      onClick={() => handleClick(null)}
                                    >
                                      {" "}
                                      NewsRoom{" "}
                                    </Link>
                                  </div>
                                </li>
                              </li>
                            )}

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              {/* <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(8, 3)}
                                >
                                  <ChevronDownIcon className=" h-5 w-5" />
                                </Link>
                              </div> */}

                              <div>
                                <Link to="/contact" className="text-color text-lg" onClick={() => handleClick(null)}>
                                  {" "}
                                  Contact Us{" "}
                                </Link>
                              </div>
                            </li>
                          </li>
                        </ul>
                      </div>
                    )}

                    {issubClicked === 8 && (
                      <div className="absolute subsub top-[60px] bg-black right-[20px]">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            {/* <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(8, 3)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div> */}

                            <div>
                              <Link className="text-color text-lg" to="/contact">
                                {" "}
                                Contact us{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">AMXSOL India</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {issubClicked === 9 && (
                      <div className="absolute subsub top-[60px] bg-black right-[20px]">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(9, 3)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Who we are{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">About US</Link>
                            </li>

                            <li className="">
                              <li className="relative ">
                                <li className=" flex w-full ">
                                  <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                    <Link
                                      className="text-lg text-color"
                                      onClick={() => handlesubsub(1, 9)}
                                    >
                                      <ChevronRightIcon className=" h-5 w-5" />
                                    </Link>
                                  </div>

                                  <div>
                                    <Link
                                      to="/people"
                                      className="text-color text-lg"
                                    >
                                      {" "}
                                      People{" "}
                                    </Link>
                                  </div>
                                </li>
                              </li>
                            </li>
                            <li className="">
                              <Link to="/career" className="text-color">
                                Careers
                              </Link>
                            </li>
                            <li className="">
                              <Link to="/newsroom" className="text-color">
                                Newsroom
                              </Link>
                            </li>
                            <li className="">
                              <Link to="/foundation" className="text-color">
                                Foundation
                              </Link>
                            </li>
                            <li className="/academy">
                              <Link className="text-color">Academy</Link>
                            </li>
                            <li className="">
                              <Link to="/contact" className="text-color">
                                Contact us
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {isSubSubClick === 1 && (
                      <div className="absolute subsub top-[60px] bg-black right-[20px]">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handlesubsub(1, 9)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                People{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link to="/employee" className="text-color">
                                Employee center
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                <li>
                  <div>
                    <SearchIcon
                      className="h-6 w-6 text-gray-500"
                      onClick={() => setIsSearch(true)}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <nav
            className={`absolute h-[80px] w-full bg-blue-100 top-0 flex justify-center align-center items-center  px-4 search_nav ${
              isSearch ? "show" : "hide"
            }`}
          >
            <div>
              <ChevronLeftIcon
                className="w-[30px] h-[30px] cursor-pointer"
                onClick={() => setIsSearch(false)}
              />
            </div>
            <div className="relative  ml-4">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-[500px] h-[40px] pl-10 pr-10 rounded-md border border-gray-300"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {searchText && (
                <XIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer"
                  onClick={() => setSearchText("")}
                />
              )}
            </div>
          </nav>
        </>
      )}

      {size.screenWidth <= 768 && (
        <>
          <nav className="h-[60px] w-full bg-black fixed topmain">
            <div className="box-border h-[60px] flex justify-center align-center">
              <div className="flex items-center ml-[20px]">
                <Link
                  className="text-white"
                  onClick={() => {setIsMenuOpen(!isMenuOpen) }}
                >
                  {isMenuOpen ? (
                    <XIcon className="h-6 w-6" /> // Display XIcon when menu is open
                  ) : (
                    <MenuIcon className="h-6 w-6" /> // Display MenuIcon when menu is closed
                  )}
                </Link>
              </div>
              <Link to="/" onClick={(prev) => setIsMenuOpen(!prev)}>
              <img
                src={imgamx}
                className="relative h-[30px] w-[100px]  box-border m-auto imgamx top-[16px] left-[10px]"
              />
              </Link>
              {/* <a
                href="#"
                className="text-2xl not-italic text-s pt-[8px] headhide"
              >
                
                <span>
                  <img src={inimg} className="h-[20px] ml-[8px] mt-[10px]" />
                </span>
                infinite possibilities
              </a> */}
            </div>

            <div className="rightnav ">
              <ul className="rightnav_ul">
                <li>
                  <div>
                    <SearchIcon
                      className="h-6 w-6 text-gray-500"
                      onClick={() => setIsSearch(true)}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <nav
            className={`absolute  h-[65px] w-full bg-blue-100 top-0 flex justify-center align-center items-center  px-4 search_nav ${
              isSearch ? "show1" : "hide"
            }`}
          >
            <div className="">
              <ChevronLeftIcon
                className="w-[30px] h-[30px] cursor-pointer"
                onClick={() => setIsSearch(false)}
              />
            </div>
            <div className="relative  ml-4">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] h-[40px] pl-10 pr-10 rounded-md border border-gray-300"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {searchText && (
                <XIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer"
                  onClick={() => setSearchText("")}
                />
              )}
            </div>
          </nav>
          {/* <div className=" "></div> */}

          <nav
            className={`fixed  h-[100vh] w-[60%] bg-black top-[60px]  ${
              isMenuOpen ? "show" : "subhide"
            } p-1 overflow-y-scroll `}
          >
            <div className="flex flex-col  w-full h-full ">
              {/* <div className="fixed">
                <button
                  className="text-white "
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </div> */}

              <div className="pt-3">
                <ul className="aligning_menu">
                  {/* <li className="pl-[20px]">
                    <li>
                      <Link
                        to={"/"}
                        className="text-color"
                        onClick={(prev) => setIsMenuOpen(!prev)}
                      >
                        <p className="texts">Home</p>
                      </Link>
                    </li>
                  </li> */}

                  <li>
                    <li className="flex">
                      {ismenuClick === 1 ? (
                        <ChevronUpIcon className="h-6 w-6 text-color" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-6 text-color" />
                      )}
                      <Link
                        className="text-color"
                        onClick={() => handleMenuClick(1)}
                      >
                        <p className="texts">What we do</p>
                      </Link>
                    </li>
                    {ismenuClick === 1 && (
                      <div>
                        <ul className="">
                          <li className="pl-[20px] ">
                            <li className="text-color texts flex items-center">
                              <Link onClick={() => handleSubMenuClick(1)}>
                                {isSubmenuClick === 1 ? (
                                  <ChevronUpIcon className="h-6 w-6 text-color" />
                                ) : (
                                  <ChevronDownIcon className="h-6 w-6 text-color" />
                                )}
                              </Link>
                              <Link
                                to="/services"
                                className="text-color"
                                onClick={(prev) => setIsMenuOpen(!prev)}
                              >
                                <p className="texts">Business Solutions</p>
                              </Link>
                            </li>
                            {isSubmenuClick === 1 && (
                              <div className="pl-[20px]">
                                <ul>
                                  <li className="pl-[20px]">
                                    <Link
                                    to="/digital"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Digital
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to={"/legal"}
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Legal Solutions
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to={"/business"}
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Business Impact
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>

                          <li className="pl-[20px] ">
                            <li className="text-color texts flex items-center">
                              <Link onClick={() => handleSubMenuClick(2)}>
                                {isSubmenuClick === 2 ? (
                                  <ChevronUpIcon className="h-6 w-6 text-color" />
                                ) : (
                                  <ChevronDownIcon className="h-6 w-6 text-color" />
                                )}
                              </Link>
                              <Link
                                to={"/tech"}
                                className="text-color"
                                onClick={(prev) => setIsMenuOpen(!prev)}
                              >
                                <p className="texts">Technology Solutions</p>
                              </Link>
                            </li>
                            {isSubmenuClick === 2 && (
                              <div className="pl-[20px]">
                                <ul>
                                  <li className="pl-[20px]">
                                    <Link
                                    to="/mitservices"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      MIT Services
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>

                          <li className="pl-[20px] ">
                            <li className="text-color texts flex items-center">
                              <Link onClick={() => handleSubMenuClick(3)}>
                                {isSubmenuClick === 3 ? (
                                  <ChevronUpIcon className="h-6 w-6 text-color" />
                                ) : (
                                  <ChevronDownIcon className="h-6 w-6 text-color" />
                                )}
                              </Link>
                              <Link
                                to={"/talent"}
                                className="text-color"
                                onClick={(prev) => setIsMenuOpen(!prev)}
                              >
                                <p className="texts">Talent Solutions</p>
                              </Link>
                            </li>
                            {isSubmenuClick === 3 && (
                              <div className="pl-[20px]">
                                <ul>
                                  <li className="pl-[20px]">
                                    <Link
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      IT Consulting
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to={"/healthcare"}
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      HealthCare
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>

                          <li className="pl-[20px] ">
                            <li className="text-color texts flex items-center">
                              <Link onClick={() => handleSubMenuClick(4)}>
                                {isSubmenuClick === 4 ? (
                                  <ChevronUpIcon className="h-6 w-6 text-color" />
                                ) : (
                                  <ChevronDownIcon className="h-6 w-6 text-color" />
                                )}
                              </Link>
                              <Link className="text-color">
                                <p className="texts">Capabilities</p>
                              </Link>
                            </li>
                            {isSubmenuClick === 4 && (
                              <div className="pl-[20px]">
                                <ul>
                                  <li className="pl-[20px]">
                                    <Link
                                      to={"/ai"}
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Artificial Intelligence
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/ml"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Machine Learning
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/intellige"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Business Intelligence
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/cloud"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Cloud Services
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/cyber"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      CyberSecurity
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/data"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Data and Analytics
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/legal"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Legal Process Outsourcing(LPO)
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/services"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Business Process Outsourcing(BPO)
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/talent"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Recruitment Process Outsourcing(RPO)
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/talent"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Finance and Risk Management
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/talent"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Accounting Services
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/talent"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Payroll Services
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/academy"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Technology Training
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>

                          <li className="pl-[20px] ">
                            <li className="text-color texts flex items-center">
                              <Link onClick={() => handleSubMenuClick(5)}>
                                {isSubmenuClick === 5 ? (
                                  <ChevronUpIcon className="h-6 w-6 text-color" />
                                ) : (
                                  <ChevronDownIcon className="h-6 w-6 text-color" />
                                )}
                              </Link>
                              <Link
                                to="/industries"
                                className="text-color"
                                onClick={(prev) => setIsMenuOpen(!prev)}
                              >
                                <p className="texts">Industries</p>
                              </Link>
                            </li>
                            {isSubmenuClick === 5 && (
                              <div className="pl-[20px]">
                                <ul>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/aerospace"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Aerospace
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/automotive"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Automotive
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/banking"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Banking
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/chemical"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Chemicals
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/construction"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Construction
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/education"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Education
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/energy"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Energy
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/finance"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Finance
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/health"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      HealthCare
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/insurance"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Insurance
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/manufacture"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Manufacturing
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/pharma"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Pharma
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/store"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Retail & Wholesale
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/technology"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Technology
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/telecom"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Telecom
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/transportation"
                                      className="text-color texts"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Transportation
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>

                  <li>
                    <li className="flex">
                      {ismenuClick === 2 ? (
                        <ChevronUpIcon className="h-6 w-6 text-color" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-6 text-color" />
                      )}
                      <Link
                        className="text-color"
                        onClick={() => handleMenuClick(2)}
                      >
                        <p className="texts">Who we are</p>
                      </Link>
                    </li>
                    {ismenuClick === 2 && (
                      <div>
                        <ul className="">
                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              <Link to={"/aboutus"} onClick={(prev) => setIsMenuOpen(!prev)} className="text-white">About us</Link>
                            </li>
                          </li>

                          <li className="pl-[20px] ">
                            <li className="text-color texts flex items-center">
                              <Link onClick={() => handleSubMenuClick(6)}>
                                {isSubmenuClick === 6 ? (
                                  <ChevronUpIcon className="h-6 w-6 text-color" />
                                ) : (
                                  <ChevronDownIcon className="h-6 w-6 text-color" />
                                )}
                              </Link>
                              <Link to="/people" className="text-color">
                                <p className="texts" onClick={(prev) => setIsMenuOpen(!prev)}>People</p>
                              </Link>
                            </li>
                            {isSubmenuClick === 6 && (
                              <div className="pl-[20px]">
                                <ul>
                                  <li className="pl-[20px]">
                                    <Link
                                      to="/employee"
                                      className="text-color texts text-white"
                                      onClick={(prev) => setIsMenuOpen(!prev)}
                                    >
                                      Employee Center
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>

                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              <Link
                                to="/career"
                                className="text-white"
                                onClick={(prev) => setIsMenuOpen(!prev)}
                              >
                                Careers
                              </Link>
                            </li>
                          </li>

                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              <Link
                                to="/newsroom"
                                className="text-white"
                                onClick={(prev) => setIsMenuOpen(!prev)}
                              >
                                Newsroom
                              </Link>
                            </li>
                          </li>
                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              <Link
                                to="/foundation"
                                className="text-white"
                                onClick={(prev) => setIsMenuOpen(!prev)}
                              >
                                {" "}
                                Foundation
                              </Link>
                            </li>
                          </li>
                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              <Link
                                to="/academy"
                                className="text-white"
                                onClick={(prev) => setIsMenuOpen(!prev)}
                              >
                                Academy
                              </Link>
                            </li>
                          </li>
                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              <Link
                                to="/contact"
                                className="text-white"
                                onClick={(prev) => setIsMenuOpen(!prev)}
                              >
                                Contact us
                              </Link>
                            </li>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>

                  <li className="pl-[20px]">
                    <li>
                      <Link to="/career" className="text-color">
                        <p
                          className="texts"
                          onClick={(prev) => setIsMenuOpen(!prev)}
                        >
                          Careers
                        </p>
                      </Link>
                    </li>
                  </li>

                  <li className="pl-[20px]">
                    <li>
                      <Link to="/newsroom" className="text-color">
                        <p
                          className="texts"
                          onClick={(prev) => setIsMenuOpen(!prev)}
                        >
                          Newsroom
                        </p>
                      </Link>
                    </li>
                  </li>

                  <li className="" >
                    <li className="flex">
                      {/* {ismenuClick === 3 ? (
                        <ChevronUpIcon className="h-6 w-6 text-color" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-6 text-color" />
                      )} */}
                      <Link
                        className="text-color ml-[20px]"
                        // onClick={() => handleMenuClick(3)}
                        onClick={(prev) => setIsMenuOpen(!prev)}
                        to="/contact"
                      >
                        <p className="texts">Contact us</p>
                      </Link>
                    </li>
                    {/* {ismenuClick === 3 && (
                      <div>
                        <ul className="">
                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              <Link onClick={(prev) => setIsMenuOpen(!prev)}>
                                AMXSOL India
                              </Link>
                            </li>
                          </li>
                        </ul>
                      </div>
                    )} */}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
