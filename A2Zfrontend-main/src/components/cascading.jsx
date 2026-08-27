/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../css/cascading.css";
import "../css/cascadingresp.css";

const CascadeSlider = () => {
  const slides = [
    {
      title: "Karen F.",
      cardCont:
        "Ryan and crew did an amazing stellar job on starting my new lawn! They beautified my back yard, cut down limbs, hauled in dirt and spread seed. Professional, very hard working and a great group of guys. They discussed every step with me and problem-solved consistently. Would most definitely hire them again!",
    },
    {
      title: "Stephanie M.",
      cardCont:
        "Ryan and his crew do exceptional work. From start to finish, they are professional, reliable, and clearly take pride in what they do. The quality of their work, rain or shine, exceeded my expectations, and the attention to detail really shows in the final result. If you're looking for a team that delivers beautiful work and great service, I highly recommend Ryan and his crew.",
    },
    {
      title: "Erich H.",
      cardCont:
        "Ryan was the only contractor who volunteered to come out for an onsite inspection and estimate, providing details on process, materials, and timeframes. When I revised my scope of work, he came out a 2nd time without hesitation. Ryan and his crew were out first thing the next day with all required equipment, completing the job efficiently and per schedule. I'm very pleased and will continue doing business with them.",
    },
    {
      title: "Sharon C.",
      cardCont:
        "A to Z did excellently! Ryan was extremely understanding about any changes and very helpful with suggestions. The work is fantastic — my grass is edged very nicely. The rock pathway Ryan redid is excellent. He weeded, put Preen down, sprayed tons of moss, trimmed a huge mass of ivy, and sawed branches off the Lilac Tree. Overall — great work and willing to do whatever needs to be done!",
    },
    {
      title: "Wayne H.",
      cardCont:
        "Needed barking, lawn moss removal, fertilization and pressure washing. They performed all beautifully. On time, extremely neat work and total clean up. Thanks guys for a great job!",
    },
    {
      title: "Susie L.",
      cardCont:
        "Ryan and Justin were very thorough and finished the job in good time. Very communicative and I will hire again.",
    },
    {
      title: "Darryl K.",
      cardCont:
        "Ryan is very knowledgeable with landscaping. We had quite the problem with moles, rodents, and moss causing lots of damage to the lawn. He thatched, aerated, reseeded, and put topsoil down. Came out later and fertilized. So happy to have a beautiful lawn again.  ",
    },
    {
      title: "Rory B.",
      cardCont:
        "He did a great job.",
    },
    {
      title: "Carole B.",
      cardCont:
        "Ryan is excellent! I needed gutter and downspout cleaning on my two story home. Once I contacted Angi, Ryan reached out immediately with the work completed the next morning. Dependable, thorough, efficient and informative — he is a true professional that I would highly recommend!",
    },
    {
      title: "Irene G.",
      cardCont:
        "Communication with Ryan is excellent. He and his crew are respectful workers getting the job done in a timely manner. They pulled weeds, spread bark mulch, and cleaned up beyond where they worked. I then hired them for a much larger landscaping project at our church — they did a fantastic job there too. I am recommending them to my friends!",
    },
    {
      title: "Jillian A.",
      cardCont:
        "Very friendly, efficient and did an excellent job! I hope all of my upcoming Angi experiences go this well.",
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
    if (index === (currentIndex + 1) % itemCount) return "cascade-slider_item next";
    if (index === (currentIndex - 1 + itemCount) % itemCount) return "cascade-slider_item prev";
    return "cascade-slider_item";
  };

  // Auto-slide every 4 seconds, pauses on hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      changeIndex(currentIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  return (
    <div
      className="cascade-slider_container"
      id="cascade-slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cascade-slider_slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={getClassName(index)}
            data-slide-number={index}
          >
            <div className="card align">
              <div className="info">

                {/* Reviewer name */}
                <p className="reviewer-name">{slide.title}</p>

                {/* Date + service tag */}
                <p className="reviewer-meta">
                  {slide.date}
                  {slide.service && (
                    <> &nbsp;·&nbsp; <span className="reviewer-service">{slide.service}</span></>
                  )}
                </p>

                {/* 5-star row */}
                <div className="stars">
                  <FontAwesomeIcon className="faIcons" icon={faStar} />
                  <FontAwesomeIcon className="faIcons" icon={faStar} />
                  <FontAwesomeIcon className="faIcons" icon={faStar} />
                  <FontAwesomeIcon className="faIcons" icon={faStar} />
                  <FontAwesomeIcon className="faIcons" icon={faStar} />
                </div>

                {/* Review body */}
                <p className="reviewer-body">{slide.cardCont}</p>

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
            className={`cascade-slider_dot ${index === currentIndex ? "cur" : ""}`}
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ol> */}

      {/* Arrows */}
      {/* <div
        className="cascade-slider_arrow cascade-slider_arrow-left"
        onClick={() => handleArrowClick("prev")}
      >
        <FontAwesomeIcon icon={faAngleLeft} className="fsIcon" />
      </div>
      <div
        className="cascade-slider_arrow cascade-slider_arrow-right"
        onClick={() => handleArrowClick("next")}
      >
        <FontAwesomeIcon icon={faAngleRight} className="fsIcon" />
      </div> */}
    </div>
  );
};

export default CascadeSlider;