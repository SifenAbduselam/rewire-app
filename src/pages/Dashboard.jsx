import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BrainVisual from "../components/BrainVisual";
import ProgressBar from "../components/ProgressBar";
import MotivationMessage from "../components/MotivationMessage";
import NeuralWiring from "../components/NeuralWiring";

export default function Dashboard() {
  const [habit, setHabit] = useState("");
  const [day, setDay] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setHabit(localStorage.getItem("habit") || "");
    const savedDay = localStorage.getItem("current_day");
    if (savedDay) {
      setDay(parseInt(savedDay));
    }
  }, []);

  const handleCheckIn = () => {
    const newDay = day + 1;
    setDay(newDay);
    localStorage.setItem("current_day", newDay.toString());
    
    if (newDay > 21) {
      const score = Math.min(100, Math.floor((21 / 21) * 100));
      localStorage.setItem("rewiring_score", score.toString());
      setTimeout(() => navigate("/completion"), 1000);
    }
  };

  const progressPercentage = Math.min(100, (day / 21) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Habit Dashboard</h2>
            <p className="text-xl text-indigo-600 font-semibold">"{habit}"</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Progress</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Day {day} of 21</span>
                  <span>{Math.round(progressPercentage)}%</span>
                </div>
                <ProgressBar progress={progressPercentage} />
              </div>
              <NeuralWiring progress={progressPercentage} />
            </div>

            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Neural Activity</h3>
              <BrainVisual day={day} />
            </div>
          </div>

          <div className="text-center mb-6">
            {day <= 21 ? (
              <button
                onClick={handleCheckIn}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                ✅ I Did It Today (Day {day})
              </button>
            ) : (
              <div className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-xl shadow-lg">
                🎉 Habit Complete! Redirecting...
              </div>
            )}
          </div>

          <div className="text-center">
            <MotivationMessage day={day} />
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/journal")}
            className="px-6 py-3 bg-white text-indigo-600 border-2 border-indigo-200 rounded-xl hover:bg-indigo-50 transition-all duration-200 font-medium"
          >
            📝 Daily Journal
          </button>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="px-6 py-3 bg-white text-red-600 border-2 border-red-200 rounded-xl hover:bg-red-50 transition-all duration-200 font-medium"
          >
            🔄 Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
}