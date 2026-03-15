import React from "react";

const Scoreboard = ({ runs, wickets, balls, commentary }) => {
  const overs = Math.floor(balls / 6);
  const currentBalls = balls % 6;

  return (
    <div className="scoreboard">
      <div className="score-row">
        <span>Runs/Wkt:</span>{" "}
        <span>
          {runs}/{wickets}
        </span>
      </div>
      <div className="score-row">
        <span>Overs:</span>{" "}
        <span>
          {overs}.{currentBalls}
        </span>
      </div>
      <div className="commentary">{commentary}</div>
    </div>
  );
};

export default Scoreboard;
