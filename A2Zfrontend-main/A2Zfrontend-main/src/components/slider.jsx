import React, { useRef, useState, useEffect } from "react";
import "../css/BeforeAfterSlider.css"; // Put your CSS here

import beforeSrc from "../media/img (25).jpg"
import afterSrc from "../media/img (9).jpg"
function BeforeAfterSlider (){
    
  const containerRef = useRef(null);
  const handleRef = useRef(null);
  const lineRef = useRef(null);
  const beforeRef = useRef(null);
  const afterRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  // Initialize slider at center
  useEffect(() => {
    const handle = handleRef.current;
    const line = lineRef.current;
    const before = beforeRef.current;
    const after = afterRef.current;
    handle.style.left = "50%";
    line.style.left = "50%";
    before.style.clipPath = `inset(0 50% 0 0)`;
    after.style.clipPath = `inset(0 0 0 50%)`;
  }, []);

  // Move slider
  const moveSlider = (clientX) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    const percentage = Math.round((offsetX / rect.width) * 100);
    handleRef.current.style.left = `${percentage}%`;
    lineRef.current.style.left = `${percentage}%`;
    beforeRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    afterRef.current.style.clipPath = `inset(0 0 0 ${percentage}%)`;
  };

  // Drag start
  const startDragging = () => {
    setIsDragging(true);
    handleRef.current.style.transition = "none";
    lineRef.current.style.transition = "none";
  };

  // Drag end
  const stopDragging = () => {
    setIsDragging(false);
    handleRef.current.style.transition = "left 0.3s ease";
    lineRef.current.style.transition = "left 0.3s ease";
  };

  // Event listeners
  useEffect(() => {
    const handleMove = (e) => {
      if (isDragging) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        moveSlider(clientX);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  return (
    <div className="slider-container" ref={containerRef}>
      <div className="before-image" ref={beforeRef}>
        <img src={beforeSrc} alt="Before" />
        <div className="before-text">Before</div>
      </div>

      <div className="after-image" ref={afterRef}>
        <img src={afterSrc} alt="After" />
        <div className="after-text">After</div>
      </div>

      <div
        className="slider-handle"
        id="sliderHandle"
        ref={handleRef}
        onMouseDown={startDragging}
        onTouchStart={startDragging}
      ></div>

      <div
        className="slider-line"
        ref={lineRef}
        onMouseDown={startDragging}
        onTouchStart={startDragging}
      >
        <div className="pulse-container">
          <svg
            role="presentation"
            focusable="false"
            fill="none"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <g>
              <rect width="50" height="50" rx="25" fill="#ffffff"></rect>
              <path
                d="m19.25 19-6 6 6 6m11.5 0 6-6-6-6"
                stroke="#000000"
                strokeWidth=".75"
                strokeLinecap="square"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
