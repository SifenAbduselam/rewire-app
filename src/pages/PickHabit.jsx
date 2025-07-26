import { useState } from "react";
import { useNavigate } from "react-router-dom";

const presetHabits = [
  "📚 Study 30 minutes", 
  "💧 Drink 8 glasses of water", 
  "📖 Read 20 pages", 
  "🧘 Meditate for 10 minutes", 
  "🏃 Exercise for 30 minutes", 
  "📝 Write in journal"
];

export default function PickHabit() {
  const [habit, setHabit] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (habit.trim()) {
      localStorage.setItem("habit", habit);
      localStorage.setItem("current_day", "1");
      localStorage.removeItem("rewiring_score");
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Habit</h2>
          <p className="text-gray-600">Select or create a habit to build</p>
        </div>

        <div className="grid gap-3 mb-6">
          {presetHabits.map((h, i) => (
            <button
              key={i}
              onClick={() => setHabit(h)}
              className={`px-6 py-4 rounded-xl border-2 transition-all duration-200 text-left ${
                habit === h 
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md" 
                  : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50"
              }`}
            >
              <span className="font-medium">{h}</span>
            </button>
          ))}
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Or type your own habit..."
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors duration-200 text-lg"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={!habit.trim()}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
            habit.trim()
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue to Dashboard →
        </button>
      </div>
    </div>
  );
}