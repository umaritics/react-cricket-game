import React, { useState, useRef } from "react";
import GameArea from "./components/GameArea";
import Scoreboard from "./components/Scoreboard";
import PowerBar from "./components/PowerBar";
import {
  PROBABILITIES,
  COMMENTARY_DB,
  MAX_BALLS,
  MAX_WICKETS,
} from "./constants/gameData";
import "./App.css";

function App() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [battingStyle, setBattingStyle] = useState("aggressive");
  const [isBowling, setIsBowling] = useState(false);
  const [commentary, setCommentary] = useState("Waiting for the first ball...");
  const [gameOver, setGameOver] = useState(false);

  // Mutable ref to track slider without causing re-renders
  const sliderPositionRef = useRef(0);

  const handlePlayShot = () => {
    if (balls >= MAX_BALLS || wickets >= MAX_WICKETS || isBowling) return;

    setIsBowling(true); // Locks controls and stops slider

    // 1. Determine outcome based strictly on probability segments
    const currentPos = sliderPositionRef.current;
    let cumulativeProb = 0;
    let finalOutcome = "0";

    for (let seg of PROBABILITIES[battingStyle]) {
      cumulativeProb += seg.prob * 100;
      if (currentPos <= cumulativeProb) {
        finalOutcome = seg.outcome;
        break;
      }
    }

    // 2. Wait for animation to finish, then process result
    setTimeout(() => {
      processResult(finalOutcome);
      setIsBowling(false); // Resets ball and unlocks controls
    }, 1000);
  };

  const processResult = (outcome) => {
    const comments = COMMENTARY_DB[outcome];
    const randomComment = comments[Math.floor(Math.random() * comments.length)];

    let newRuns = runs;
    let newWickets = wickets;

    if (outcome === "Wicket") {
      newWickets += 1;
      setCommentary(`WICKET! ${randomComment}`);
    } else {
      newRuns += parseInt(outcome);
      setCommentary(`${outcome} Runs. ${randomComment}`);
    }

    setRuns(newRuns);
    setWickets(newWickets);
    setBalls((prev) => prev + 1);

    if (newWickets >= MAX_WICKETS || balls + 1 >= MAX_BALLS) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setRuns(0);
    setWickets(0);
    setBalls(0);
    setBattingStyle("aggressive");
    setCommentary("New game started. Good luck!");
    setGameOver(false);
    setIsBowling(false);
  };

  return (
    <div className="main-wrapper">
      <div className="app-container">
        <div className="game-wrapper">
          <GameArea isBowling={isBowling} />
          <Scoreboard
            runs={runs}
            wickets={wickets}
            balls={balls}
            commentary={commentary}
          />

          {gameOver && (
            <div className="game-over-modal">
              <h2>Innings Over!</h2>
              <p>
                Final Score: {runs}/{wickets}
              </p>
              <button onClick={resetGame}>Restart Game</button>
            </div>
          )}

          <div className="controls-footer">
            <div className="controls-top">
              <label>
                Batting Style:
                <select
                  value={battingStyle}
                  onChange={(e) => setBattingStyle(e.target.value)}
                  disabled={isBowling || gameOver}
                >
                  <option value="aggressive">Aggressive</option>
                  <option value="defensive">Defensive</option>
                </select>
              </label>
              <button onClick={handlePlayShot} disabled={isBowling || gameOver}>
                Play Shot
              </button>
            </div>
            <PowerBar
              battingStyle={battingStyle}
              sliderPositionRef={sliderPositionRef}
              isBowling={isBowling}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
