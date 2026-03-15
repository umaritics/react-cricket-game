import React from "react";
import "./Pitch.css";

const Pitch = ({ isAnimating, outcome }) => {
  return (
    <div className="field-container">
      <div className="cricket-pitch">
        {/* The Stumps */}
        <div className="stumps">
          <div className="stump"></div>
          <div className="stump"></div>
          <div className="stump"></div>
        </div>

        {/* The Batsman Sprite (Emoji for simplicity) */}
        <div className={`batsman ${isAnimating ? "swing-animation" : ""}`}>
          🏏
        </div>

        {/* The Ball Sprite */}
        <div
          className={`ball ${isAnimating ? "hit-animation" : "bowl-animation"}`}
        >
          ⚾
        </div>

        {/* Floating Outcome Text */}
        {outcome && (
          <div
            className={`outcome-text ${outcome === "Wicket" ? "text-danger" : "text-success"}`}
          >
            {outcome === "Wicket" ? "OUT!" : `${outcome} Runs`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pitch;
