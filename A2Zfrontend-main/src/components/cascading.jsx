import React, { useState,useEffect } from "react";
import "../css/style.css"; // keep your CSS styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "../css/cascading.css"
import "../css/cascadingresp.css"

const CascadeSlider = () => {
 const slides = [
    {
      title: "William S.",
      cardCont:
        "Awesome! Fence looks great! Richard and his team did a great job at a fair price. Job was done fast and he cleaned up the trash from the old fence for a reasonable price.",
    },
    {
      title: "Danny E.",
      cardCont:
        "They did a phenomenal job. They exceeded my expectations. I will definitely use them again for my next job.",
    },
    {
      title: "Dawn F.",
      cardCont:
        "Fence looks great, quick response, completed in two days! Very professional!! Would highly recommend!",
    },
    {
      title: "Sara D.",
      cardCont:
        "Very quick turnaround from calling to ask for an estimate to getting the job done. Repairs were done well and in a timely manner. I couldn't recommend them more!",
    },
    {
      title: "Laurie O.",
      cardCont:
        "Richard and his team were great to work with! My new fence looks fabulous! Thank you for taking pride in your work!",
    },
    {
      title: "Justin C.",
      cardCont:
        "A to Z completed 300 feet of cedar fencing around my property. The fence came out beautiful and was completed in a timely manner and at a more than reasonable price.",
    },
    {
      title: "Bruce K.",
      cardCont:
        "The job was done quickly and efficiently. They were on time every day and the price was very fair. I would recommend them.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = slides.length;
  const [isHovered, setIsHovered] = useState(false);

  const changeIndex = (newIndex) => {
    if (newIndex < 0) newIndex = itemCount - 1;
    if (newIndex >= itemCount) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const handleArrowClick = (direction) => {
    direction === "next"
      ? changeIndex(currentIndex + 1)
      : changeIndex(currentIndex - 1);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const getClassName = (index) => {
    if (index === currentIndex) return "cascade-slider_item now";
    if (index === (currentIndex + 1) % itemCount)
      return "cascade-slider_item next";
    if (index === (currentIndex - 1 + itemCount) % itemCount)
      return "cascade-slider_item prev";
    return "cascade-slider_item";
  };

  // ✅ Auto-slide every 4 seconds
  useEffect(() => {
    if (isHovered) return; // pause on hover
    const interval = setInterval(() => {
      changeIndex(currentIndex + 1);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);


  return (
    <div className="cascade-slider_container" id="cascade-slider">
      <div className="cascade-slider_slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={getClassName(index)}
            data-slide-number={index}
          >
            <div className="card align">
              
              <div className="info">
                <p>{slide.title}</p>
                <div className="stars">
                    <FontAwesomeIcon className="faIcons" icon={faStar} />
                    <FontAwesomeIcon className="faIcons" icon={faStar} />
                    <FontAwesomeIcon className="faIcons" icon={faStar} />
                    <FontAwesomeIcon className="faIcons" icon={faStar} />
                    <FontAwesomeIcon className="faIcons" icon={faStar} />

                     
                </div>
                <p >{slide.cardCont}</p>
              
               
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {/* <ol className="cascade-slider_nav">
        {slides.map((_, index) => (
          <li
            key={index}
            className={`cascade-slider_dot ${
              index === currentIndex ? "cur" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ol> */}

      {/* Arrows */}
      {/* <div
        className="cascade-slider_arrow cascade-slider_arrow-left"
        onClick={() => handleArrowClick("prev")}
      >
        <FontAwesomeIcon icon={faAngleLeft} className="fsIcon"/>
      </div>

      <div
        className="cascade-slider_arrow cascade-slider_arrow-right"
        onClick={() => handleArrowClick("next")}
      >
               <FontAwesomeIcon icon={faAngleRight} className="fsIcon"/>

      </div> */}
    </div>
  );
};

export default CascadeSlider;
