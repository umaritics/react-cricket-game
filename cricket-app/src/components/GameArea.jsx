import React, { useState, useEffect } from "react";
import bowlerImg from "../assets/bowler.png";
import batsmanImg from "../assets/batsman.png";

const GameArea = ({ isBowling }) => {
  const [battingAnim, setBattingAnim] = useState(false);

  useEffect(() => {
    let timer;
    if (isBowling) {
      // Trigger batting animation right as the ball reaches the batsman
      timer = setTimeout(() => setBattingAnim(true), 600);
    } else {
      // Defer the state reset to avoid the synchronous effect error
      timer = setTimeout(() => setBattingAnim(false), 0);
    }

    // Cleanup function to clear the active timer if the component unmounts
    return () => clearTimeout(timer);
  }, [isBowling]);

  return (
    <div className="game-area">
      {/* Sticky Note Requirement */}
      <div className="sticky-note">
        Name: Muhammad Umar
        <br />
        Roll Number: XXi-XXXX
        <br />
        Section: X
      </div>

      <div className="player bowler">
        <img src={bowlerImg} alt="Bowler" className="sprite" />
      </div>

      <div className={`player batsman ${battingAnim ? "swing" : ""}`}>
        <img src={batsmanImg} alt="Batsman" className="sprite" />
      </div>

      <div className={`ball ${isBowling ? "bowl-action" : ""}`}></div>
    </div>
  );
};

export default GameArea;
