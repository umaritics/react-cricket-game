import React, { useEffect, useRef } from "react";
import { PROBABILITIES } from "../constants/gameData";

const PowerBar = ({ battingStyle, sliderPositionRef, isBowling }) => {
  const sliderDomRef = useRef(null);
  const requestRef = useRef();
  const directionRef = useRef(1);
  const posRef = useRef(0);

  useEffect(() => {
    const animate = () => {
      if (!isBowling) {
        posRef.current += directionRef.current * 1.5; // Adjust speed here
        if (posRef.current >= 99 || posRef.current <= 0) {
          directionRef.current *= -1;
        }

        if (sliderDomRef.current) {
          sliderDomRef.current.style.left = `${posRef.current}%`;
        }
        // Update the mutable ref so the parent knows the position without a re-render
        sliderPositionRef.current = posRef.current;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isBowling, sliderPositionRef]);

  return (
    <div className="power-bar-wrapper">
      <div className="power-bar-container">
        <div ref={sliderDomRef} className="slider"></div>
        {PROBABILITIES[battingStyle].map((seg, idx) => (
          <div
            key={idx}
            className="segment"
            style={{ width: `${seg.prob * 100}%`, backgroundColor: seg.color }}
          >
            {seg.outcome}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerBar;
