// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BrainVisual from "../components/BrainVisual";
import ProgressBar from "../components/ProgressBar";
import MotivationMessage from "../components/MotivationMessage";
import NeuralWiring from "../components/NeuralWiring";

export default function Dashboard() {
  const [habit, setHabit] = useState("");
  const [day, setDay] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const savedHabit = localStorage.getItem("habit");
    
    if (savedHabit) {
      setHabit(savedHabit);
      
      // Load habit-specific day count
      const habitDayKey = `habit_day_${encodeURIComponent(savedHabit)}`;
      const savedDay = localStorage.getItem(habitDayKey);
      
      if (savedDay !== null) {
        setDay(parseInt(savedDay));
      } else {
        setDay(0); // Default to day 0 for new habits
      }
    } else {
      navigate("/pickhabit");
    }
  }, [navigate]);

  const handleCheckIn = () => {
    // Only increment if we haven't reached 21 days
    if (day < 21) {
      const newDay = day + 1;
      setDay(newDay);
      
      // Save habit-specific day count
      const habitDayKey = `habit_day_${encodeURIComponent(habit)}`;
      localStorage.setItem(habitDayKey, newDay.toString());
      
      // If we reached 21 days, go to completion
      if (newDay === 21) {
        localStorage.setItem("rewiring_score", "100");
        setTimeout(() => navigate("/completion"), 1500);
      }
    }
  };

  // Make sure day doesn't exceed 21 for display
  const displayDay = Math.min(day, 21);
  const progressPercentage = Math.min(100, (displayDay / 21) * 100);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Habit: {habit}</h2>
      <p className="text-gray-600 mb-4">Day {displayDay} of 21</p>

      <div className="mb-6">
        <ProgressBar progress={progressPercentage} />
      </div>

      <div className="flex justify-center gap-8 mb-6">
        <div>
          <NeuralWiring progress={progressPercentage} />
        </div>
        <div>
        </div>
      </div>

      <div className="text-center mb-6">
        <button
          onClick={handleCheckIn}
          disabled={day >= 21}
          className={`px-6 py-3 rounded-xl transition ${
            day >= 21 
              ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          {day >= 21 ? "✅ Habit Completed!" : `✅ I Did It Today (Day ${displayDay})`}
        </button>
      </div>

      <MotivationMessage day={displayDay} />

      <div className="flex gap-4 justify-center mt-8">
        <button
          onClick={() => navigate("/myhabits")}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          📊 My Habits
        </button>
        <button
          onClick={() => navigate("/journal")}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          📝 Journal
        </button>
        <button
          onClick={() => {
            const habitDayKey = `habit_day_${encodeURIComponent(habit)}`;
            localStorage.setItem(habitDayKey, "0");
            setDay(0);
          }}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}