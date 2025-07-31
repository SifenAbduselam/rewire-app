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

  // Load data from localStorage when component mounts
  useEffect(() => {
    // Load habit
    const savedHabit = localStorage.getItem("habit");
    if (savedHabit) {
      setHabit(savedHabit);
      
      // Load habit-specific day count
      const habitDayKey = `habit_day_${encodeURIComponent(savedHabit)}`;
      const savedDay = localStorage.getItem(habitDayKey);
      
      if (savedDay !== null) {
        const parsedDay = parseInt(savedDay);
        if (!isNaN(parsedDay)) {
          setDay(parsedDay);
        }
      }
    } else {
      navigate("/pickhabit");
    }
  }, [navigate]);

  const handleCheckIn = () => {
    const newDay = day + 1;
    setDay(newDay);
    
    // Save habit-specific day count
    const habitDayKey = `habit_day_${encodeURIComponent(habit)}`;
    localStorage.setItem(habitDayKey, newDay.toString());
    
    // Check if habit is completed (21 days)
    if (newDay >= 21) {
      const score = 100;
      localStorage.setItem("rewiring_score", score.toString());
      
      // Redirect to completion after a delay
      setTimeout(() => {
        navigate("/completion");
      }, 1500);
    }
  };

  // Calculate progress percentage
  const progressPercentage = Math.min(100, (day / 21) * 100);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Habit: {habit}</h2>
      <p className="text-gray-600 mb-4">Day {day} of 21</p>

      <div className="mb-6">
        <ProgressBar progress={progressPercentage} />
      </div>

      <div className="flex justify-center mb-6">
        <NeuralWiring progress={progressPercentage} />
      </div>

      <div className="flex justify-center mb-6">
        <BrainVisual day={day} />
      </div>

      <div className="text-center mb-6">
        <button
          onClick={handleCheckIn}
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          ✅ I Did It Today (Day {day + 1})
        </button>
      </div>

      <div className="text-center">
        <MotivationMessage day={day} />
      </div>

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