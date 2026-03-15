import React from "react";
import "./Scoreboard.css";

const Scoreboard = ({ runs, wickets, ballsPlayed }) => {
  // Calculate overs from balls (e.g., 7 balls = 1.1 overs)
  const overs = Math.floor(ballsPlayed / 6);
  const currentOverBalls = ballsPlayed % 6;
  const displayOvers = `${overs}.${currentOverBalls}`;

  return (
    <div className="scoreboard-container">
      <div className="score-stat">
        <span>Runs/Wkt</span>
        <strong>
          {runs}/{wickets}
        </strong>
      </div>
      <div className="score-stat">
        <span>Overs</span>
        <strong>{displayOvers} / 2.0</strong>
      </div>
      <div className="score-stat">
        <span>Balls Remaining</span>
        <strong>{12 - ballsPlayed}</strong>
      </div>
    </div>
  );
};

export default Scoreboard;
