import React, { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import PowerBar from "./components/PowerBar";
import Pitch from "./components/Pitch";
import "./App.css";

const MAX_BALLS = 12;
const MAX_WICKETS = 2;

function App() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [ballsPlayed, setBallsPlayed] = useState(0);
  const [battingStyle, setBattingStyle] = useState("Aggressive");
  const [gameOver, setGameOver] = useState(false);

  // Animation states
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentOutcome, setCurrentOutcome] = useState(null);

  const handlePlayShot = (outcome) => {
    if (gameOver || isAnimating) return;

    // Trigger animations
    setIsAnimating(true);
    setCurrentOutcome(outcome);

    const isWicket = outcome === "Wicket";
    const runsScored = isWicket ? 0 : parseInt(outcome, 10);

    const newWickets = wickets + (isWicket ? 1 : 0);
    const newRuns = runs + runsScored;
    const newBalls = ballsPlayed + 1;

    // Update state
    setRuns(newRuns);
    setWickets(newWickets);
    setBallsPlayed(newBalls);

    // Check for game over after a short delay so the user sees the final shot
    setTimeout(() => {
      setIsAnimating(false);
      setCurrentOutcome(null);

      if (newWickets >= MAX_WICKETS || newBalls >= MAX_BALLS) {
        setGameOver(true);
      }
    }, 1500); // 1.5 second animation lock
  };

  const handleRestart = () => {
    setRuns(0);
    setWickets(0);
    setBallsPlayed(0);
    setBattingStyle("Aggressive");
    setGameOver(false);
    setCurrentOutcome(null);
  };

  return (
    <div className="game-container">
      <header>
        <h1>2D Cricket</h1>
        <Scoreboard runs={runs} wickets={wickets} ballsPlayed={ballsPlayed} />
      </header>

      <main className="pitch-area">
        <Pitch isAnimating={isAnimating} outcome={currentOutcome} />
      </main>

      <section className="controls-area">
        {gameOver ? (
          <div className="game-over-screen">
            <h2>Game Over!</h2>
            <p>
              Final Score: {runs}/{wickets}
            </p>
            <button onClick={handleRestart} className="btn-restart">
              Restart Game
            </button>
          </div>
        ) : (
          <>
            <div className="style-selector">
              <label>Batting Style:</label>
              <select
                value={battingStyle}
                onChange={(e) => setBattingStyle(e.target.value)}
                disabled={isAnimating}
              >
                <option value="Aggressive">Aggressive</option>
                <option value="Defensive">Defensive</option>
              </select>
            </div>
            <PowerBar
              battingStyle={battingStyle}
              onPlayShot={handlePlayShot}
              disabled={gameOver || isAnimating}
            />
          </>
        )}
      </section>
    </div>
  );
}

export default App;
