// src/pages/PickHabit.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PickHabit() {
  const [habit, setHabit] = useState("");
  const [customHabits, setCustomHabits] = useState([]);
  const navigate = useNavigate();

  // Load custom habits on mount
  useEffect(() => {
    const savedCustomHabits = localStorage.getItem("custom_habits");
    if (savedCustomHabits) {
      setCustomHabits(JSON.parse(savedCustomHabits));
    }
  }, []);

  const presetHabits = [
    "📚 Study 30 minutes", 
    "💧 Drink 8 glasses of water", 
    "📖 Read 20 pages", 
    "🧘 Meditate for 10 minutes", 
    "🏃 Exercise for 30 minutes", 
    "📝 Write in journal"
  ];

  const allHabits = [...presetHabits, ...customHabits];

  const handleSubmit = () => {
    if (habit.trim()) {
      localStorage.setItem("habit", habit);
      
      // Only create the key if it doesn't exist
      const habitDayKey = `habit_day_${encodeURIComponent(habit)}`;
      if (!localStorage.getItem(habitDayKey)) {
        localStorage.setItem(habitDayKey, "0");
      }
      
      localStorage.removeItem("rewiring_score");
      
      // Save custom habit if it's new
      if (!presetHabits.includes(habit) && !customHabits.includes(habit)) {
        const updatedCustomHabits = [...customHabits, habit];
        setCustomHabits(updatedCustomHabits);
        localStorage.setItem("custom_habits", JSON.stringify(updatedCustomHabits));
      }
      
      navigate("/dashboard");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Choose Your Habit</h2>
      <div className="grid gap-2 mb-4">
        {allHabits.map((h, i) => (
          <button
            key={i}
            onClick={() => setHabit(h)}
            className={`px-4 py-2 rounded-xl border ${
              habit === h ? "bg-indigo-600 text-white" : "bg-white text-black"
            }`}
          >
            {h}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Or type your own..."
        className="w-full p-2 border rounded-xl mb-4"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
      >
        Continue →
      </button>
    </div>
  );
}