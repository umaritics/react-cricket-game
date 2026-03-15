export const PROBABILITIES = {
  aggressive: [
    { outcome: "Wicket", prob: 0.4, color: "#E74C3C" },
    { outcome: "0", prob: 0.1, color: "#7F8C8D" },
    { outcome: "1", prob: 0.1, color: "#2ECC71" },
    { outcome: "2", prob: 0.1, color: "#F1C40F" },
    { outcome: "3", prob: 0.05, color: "#E67E22" },
    { outcome: "4", prob: 0.1, color: "#D35400" },
    { outcome: "6", prob: 0.15, color: "#8E44AD" },
  ],
  defensive: [
    { outcome: "Wicket", prob: 0.1, color: "#E74C3C" },
    { outcome: "0", prob: 0.35, color: "#7F8C8D" },
    { outcome: "1", prob: 0.3, color: "#2ECC71" },
    { outcome: "2", prob: 0.1, color: "#F1C40F" },
    { outcome: "3", prob: 0.05, color: "#E67E22" },
    { outcome: "4", prob: 0.07, color: "#D35400" },
    { outcome: "6", prob: 0.03, color: "#8E44AD" },
  ],
};

export const COMMENTARY_DB = {
  Wicket: [
    "Bowled him! What a delivery!",
    "Caught in the deep! He has to go.",
    "Edged and taken! Crucial wicket.",
  ],
  0: [
    "Solid defense.",
    "No run there, played straight to the fielder.",
    "Beaten by the pace!",
  ],
  1: [
    "Pushed into the gap for a single.",
    "Quick running between the wickets.",
    "Just a little nudge for one.",
  ],
  2: [
    "Good placement, they'll come back for two.",
    "Excellent running, pushing the fielders.",
    "Sliced away for a couple of runs.",
  ],
  3: [
    "Great shot, but cut off at the boundary. Three runs.",
    "Excellent running to sneak a third!",
    "Brilliant fielding saves a certain boundary.",
  ],
  4: [
    "Cracking shot! One bounce over the ropes.",
    "Pierces the gap perfectly for four!",
    "What a boundary, pure class!",
  ],
  6: [
    "Massive strike! That is out of the ground!",
    "He's connected cleanly, SIX runs!",
    "Huge hit over long-on!",
  ],
};

export const MAX_BALLS = 12;
export const MAX_WICKETS = 2;
