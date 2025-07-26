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
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-10 text-center">
        <div className="text-8xl mb-6">🎉</div>
        
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-600 mb-4">
          Congratulations! 🧠
        </h1>
        
        <p className="text-xl text-gray-700 mb-2">You've successfully rewired your brain with:</p>
        <p className="font-bold text-2xl text-indigo-600 mb-6">"{habit}"</p>
        
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 mb-8">
          <p className="text-lg text-gray-700 mb-2">Your Rewiring Score:</p>
          <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-600">
            {score}%
          </p>
        </div>

        <div className="mb-8">
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            🧠 Brain Rewired Badge Unlocked!
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/pickhabit">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              🔄 Start New Habit
            </button>
          </Link>
          <Link to="/dashboard">
            <button className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300">
              📊 View Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}