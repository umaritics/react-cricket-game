// Each style's probabilities must sum to 1.00
export const battingProbabilities = {
  Aggressive: [
    { outcome: "Wicket", prob: 0.4, color: "#e74c3c" }, // Red (High Risk)
    { outcome: "0", prob: 0.1, color: "#7f8c8d" }, // Gray
    { outcome: "1", prob: 0.1, color: "#2ecc71" }, // Green
    { outcome: "2", prob: 0.1, color: "#f1c40f" }, // Yellow
    { outcome: "3", prob: 0.05, color: "#e67e22" }, // Orange
    { outcome: "4", prob: 0.1, color: "#d35400" }, // Dark Orange
    { outcome: "6", prob: 0.15, color: "#9b59b6" }, // Purple (High Reward)
  ],
  Defensive: [
    { outcome: "Wicket", prob: 0.1, color: "#e74c3c" }, // Lower Risk
    { outcome: "0", prob: 0.4, color: "#7f8c8d" },
    { outcome: "1", prob: 0.3, color: "#2ecc71" },
    { outcome: "2", prob: 0.1, color: "#f1c40f" },
    { outcome: "3", prob: 0.05, color: "#e67e22" },
    { outcome: "4", prob: 0.05, color: "#d35400" }, // Lower Boundary Prob
    { outcome: "6", prob: 0.0, color: "#9b59b6" },
  ],
};

// Determines outcome based on slider position (0.0 to 1.0)
export const determineOutcome = (sliderValue, style) => {
  const probs = battingProbabilities[style];
  let cumulative = 0;

  for (let segment of probs) {
    cumulative += segment.prob;
    if (sliderValue <= cumulative) {
      return segment.outcome;
    }
  }
  return probs[probs.length - 1].outcome; // Fallback
};
