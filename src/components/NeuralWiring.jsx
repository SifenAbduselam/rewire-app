export default function NeuralWiring({ progress = 0 }) {
  // Ensure progress is between 0 and 100
  const safeProgress = Math.max(0, Math.min(100, progress));
  const strokeDashoffset = 440 - (440 * safeProgress) / 100;

  return (
    <svg width="150" height="150" viewBox="0 0 150 150">
      <circle
        cx="75"
        cy="75"
        r="70"
        stroke="#bbb"
        strokeWidth="10"
        fill="none"
      />
      <circle
        cx="75"
        cy="75"
        r="70"
        stroke="#00b894"
        strokeWidth="10"
        fill="none"
        strokeDasharray="440"
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1s ease" }}
      />
      <text x="50%" y="50%" textAnchor="middle" dy="8" fontSize="24" fill="#00b894">
        {Math.round(safeProgress)}%
      </text>
    </svg>
  );
}