import { motion } from "framer-motion";

export default function BrainVisual({ day }) {
  // Handle day 0 - start with minimal glow
  const sparkSize = day === 0 ? 5 : Math.min(day * 5, 100);

  return (
    <div className="flex flex-col items-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6366f1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ filter: `drop-shadow(0 0 ${sparkSize}px #6366f1)` }}
        transition={{ duration: 0.5 }}
      >
        <path d="M7 9a3 3 0 0 1 6 0v1H9a2 2 0 0 0-2 2v1h6" />
        <path d="M15 7a3 3 0 0 1 3 3v2h-3v3" />
        <path d="M12 19a2 2 0 0 1-2-2v-2h4v2a2 2 0 0 1-2 2z" />
      </motion.svg>
      <p className="text-sm text-gray-600 mt-2">
        Neural Pathway Progress: Day {day}/21
      </p>
    </div>
  );
}