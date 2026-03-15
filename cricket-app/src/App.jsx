import React, { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

const MAX_BALLS = 12;
const MAX_WICKETS = 2;

function App() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [ballsPlayed, setBallsPlayed] = useState(0);
  const [battingStyle, setBattingStyle] = useState("Aggressive");
  const [gameOver, setGameOver] = useState(false);

  // We will build this out in Step 3!
  const handlePlayShot = (outcome) => {
    if (gameOver) return;

    // Logic will go here to update runs or wickets based on the power bar
  };

  const handleRestart = () => {
    setRuns(0);
    setWickets(0);
    setBallsPlayed(0);
    setBattingStyle("Aggressive");
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <header>
        <h1>2D Cricket</h1>
        <Scoreboard runs={runs} wickets={wickets} ballsPlayed={ballsPlayed} />
      </header>

      <main className="pitch-area">
        {/* Sprites and animations will go here in Step 3 */}
        <div className="placeholder-pitch">Pitch Area</div>
      </main>

      <section className="controls-area">
        {gameOver ? (
          <div className="game-over-screen">
            <h2>Game Over!</h2>
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
              >
                <option value="Aggressive">Aggressive</option>
                <option value="Defensive">Defensive</option>
              </select>
            </div>
            {/* Power bar component will be added here in Step 2 */}
            <div className="placeholder-powerbar">Power Bar Region</div>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
