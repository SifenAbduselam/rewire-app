// src/pages/MyHabits.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

export default function MyHabits() {
  const [habits, setHabits] = useState([]);
  const navigate = useNavigate();

  // Load all habits from localStorage
  useEffect(() => {
    loadHabits();
  }, []);

  const loadHabits = () => {
    const allHabits = [];
    const habitNames = new Set();
    
    // Get all localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('habit_day_')) {
        // Extract habit name from key
        const habitName = decodeURIComponent(key.replace('habit_day_', ''));
        habitNames.add(habitName);
      }
    }
    
    // Get current data for each habit
    habitNames.forEach(habitName => {
      const dayKey = `habit_day_${encodeURIComponent(habitName)}`;
      const currentDay = parseInt(localStorage.getItem(dayKey)) || 0;
      const progress = Math.min(100, (currentDay / 21) * 100);
      
      allHabits.push({
        name: habitName,
        currentDay,
        progress,
        isCompleted: currentDay >= 21
      });
    });
    
    setHabits(allHabits);
  };

  const deleteHabit = (habitName) => {
    if (window.confirm(`Are you sure you want to delete "${habitName}"? All progress will be lost.`)) {
      const dayKey = `habit_day_${encodeURIComponent(habitName)}`;
      localStorage.removeItem(dayKey);
      loadHabits(); // Reload the list
    }
  };

  const continueHabit = (habitName) => {
    localStorage.setItem("habit", habitName);
    navigate("/dashboard");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Habits</h2>
        <button
          onClick={() => navigate("/pickhabit")}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          + Add New Habit
        </button>
      </div>

      {habits.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No habits tracked yet</p>
          <button
            onClick={() => navigate("/pickhabit")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Start Your First Habit
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {habits.map((habit, index) => (
            <div key={index} className="bg-white border rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{habit.name}</h3>
                  <p className="text-gray-600 text-sm">
                    Day {habit.currentDay} of 21
                    {habit.isCompleted && " 🎉 COMPLETED!"}
                  </p>
                  <div className="mt-2">
                    <ProgressBar progress={habit.progress} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => continueHabit(habit.name)}
                    className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700 transition"
                  >
                    Continue
                  </button>
                  <button
                    onClick={() => deleteHabit(habit.name)}
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}