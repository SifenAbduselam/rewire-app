// src/pages/Completion.jsx
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Completion() {
  const habit = localStorage.getItem("habit");
  const score = localStorage.getItem("rewiring_score") || "100";
  const navigate = useNavigate();

  useEffect(() => {
    if (!habit) {
      navigate("/");
    }
  }, [habit, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-white p-4 sm:p-6 text-center">
      <h1 className="text-2xl sm:text-4xl font-bold text-green-700 mb-3 sm:mb-4">🎉 You Rewired Your Brain!</h1>
      <p className="text-base sm:text-xl mb-2">You completed your 21-day habit:</p>
      <p className="font-bold text-lg sm:text-2xl mb-3 sm:mb-4">{habit}</p>
      <p className="text-base sm:text-lg">Your Rewiring Score: <span className="text-indigo-600 font-bold">{score}%</span></p>

      <div className="my-4 sm:my-6">
        <span className="bg-green-200 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-green-800 text-sm sm:text-lg">🧠 Brain Rewired Badge</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full max-w-md">
        <Link to="/pickhabit" className="flex-1">
          <button className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-indigo-600 text-white rounded-lg sm:rounded-xl hover:bg-indigo-700 transition text-sm sm:text-base">
            New Habit
          </button>
        </Link>
        <Link to="/dashboard" className="flex-1">
          <button className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-gray-300 text-black rounded-lg sm:rounded-xl hover:bg-gray-400 transition text-sm sm:text-base">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}