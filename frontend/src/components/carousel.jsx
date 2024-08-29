import React, { useState, useEffect } from "react";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    // <div className=" relative flex justify-center items-center h-full w-full ">
     
    //   {slides.map((slide, index) => (
    //     <div
    //       className={
    //         index === current
    //           ? " opacity-100 transition duration-2000 ease-in-out scale-10"
    //           : " opacity-0 transition duration-2000 ease-in-out "
    //       }
    //       key={index}
    //     >
    //       {index === current && (
    //         <img
    //           src={slide.image}
    //           alt={slide.title}
    //           className="rounded-lg shadow-lg w-full h-full object-cover"
    //         />
    //       )}
    //     </div>
    //   ))}
    //   {/* <div className="absolute bottom-8 flex space-x-2">
    //     {slides.map((slide, index) => (
    //       <button
    //         key={index}
    //         className={`w-3 h-3 rounded-full ${
    //           index === current ? "bg-blue-500" : "bg-gray-300"
    //         }`}
    //         onClick={() => goToSlide(index)}
    //       ></button>
    //     ))}
    //   </div> */}
    // </div>
    <div className="newsroom-unique-carousel">
        <input
          type="radio"
          name="carousel"
          id="slide1"
          checked={currentSlide === 1}
          onChange={() => setCurrentSlide(1)}
        />
        <input
          type="radio"
          name="carousel"
          id="slide2"
          checked={currentSlide === 2}
          onChange={() => setCurrentSlide(2)}
        />
        <input
          type="radio"
          name="carousel"
          id="slide3"
          checked={currentSlide === 3}
          onChange={() => setCurrentSlide(3)}
        />
        <input
          type="radio"
          name="carousel"
          id="slide4"
          checked={currentSlide === 4}
          onChange={() => setCurrentSlide(4)}
        />

        <div className="newsroom-unique-carousel-inner">
          <div
            className={`newsroom-unique-carousel-item ${
              currentSlide === 1 ? "active" : ""
            }`}
            id="item1"
          >
            <img src={one} alt="First slide" />
            <div className="newsroom-unique-carousel-caption">
              <h3>New Product Launch</h3>
              <p>
                Introducing our latest product designed to enhance user
                experience.
              </p>
            </div>
          </div>
          <div
            className={`newsroom-unique-carousel-item ${
              currentSlide === 2 ? "active" : ""
            }`}
            id="item2"
          >
            <img src={two} alt="Second slide" />
            <div className="newsroom-unique-carousel-caption">
              <h3>Community Outreach</h3>
              <p>Learn about our initiatives supporting local communities.</p>
            </div>
          </div>
          <div
            className={`newsroom-unique-carousel-item ${
              currentSlide === 3 ? "active" : ""
            }`}
            id="item3"
          >
            <img src={three} alt="Third slide" />
            <div className="newsroom-unique-carousel-caption">
              <h3>Corporate Partnership</h3>
              <p>Announcing our strategic partnership to drive innovation.</p>
            </div>
          </div>
          <div
            className={`newsroom-unique-carousel-item ${
              currentSlide === 4 ? "active" : ""
            }`}
            id="item4"
          >
            <img src={four} alt="Fourth slide" />
            <div className="newsroom-unique-carousel-caption">
              <h3>Industry Recognition</h3>
              <p>Recognition for our commitment to excellence in technology.</p>
            </div>
          </div>
        </div>

        <div className="newsroom-unique-carousel-nav">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
        </div>
      </div>
  );
};

export default Carousel;
