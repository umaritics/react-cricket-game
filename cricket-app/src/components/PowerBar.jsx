import React, { useState, useEffect, useRef } from "react";
import { battingProbabilities, determineOutcome } from "../utils/probabilities";
import "./PowerBar.css";

const PowerBar = ({ battingStyle, onPlayShot, disabled }) => {
  const [sliderPos, setSliderPos] = useState(0);
  const requestRef = useRef();
  const direction = useRef(1); // 1 for right, -1 for left

  useEffect(() => {
    if (disabled) return;

    const speed = 0.015; // Adjust this value to make the slider faster/slower
    let currentPos = sliderPos;

    const animate = () => {
      currentPos += speed * direction.current;

      // Reverse direction at the edges
      if (currentPos >= 1) {
        currentPos = 1;
        direction.current = -1;
      } else if (currentPos <= 0) {
        currentPos = 0;
        direction.current = 1;
      }

      setSliderPos(currentPos);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [disabled]);

  const handleShotClick = () => {
    if (disabled) return;
    const outcome = determineOutcome(sliderPos, battingStyle);
    onPlayShot(outcome);
  };

  const segments = battingProbabilities[battingStyle];

  return (
    <div className="power-bar-container">
      <div className="power-bar">
        {segments.map((seg, index) => (
          <div
            key={index}
            className="power-bar-segment"
            style={{
              width: `${seg.prob * 100}%`,
              backgroundColor: seg.color,
            }}
          >
            {/* Only show text if segment is wide enough */}
            {seg.prob >= 0.05 ? seg.outcome : ""}
          </div>
        ))}
        <div className="slider" style={{ left: `${sliderPos * 100}%` }}></div>
      </div>
      <button
        className="btn-play-shot"
        onClick={handleShotClick}
        disabled={disabled}
      >
        Play Shot
      </button>
    </div>
  );
};

export default PowerBar;
