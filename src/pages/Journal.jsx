import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Journal() {
  const today = new Date().toISOString().split("T")[0];
  const [entry, setEntry] = useState(localStorage.getItem(`journal_${today}`) || "");
  const navigate = useNavigate();

  const saveEntry = () => {
    localStorage.setItem(`journal_${today}`, entry);
    alert("Journal entry saved! 📝");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Daily Reflection 📝</h2>
          <p className="text-gray-600">Date: {today}</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-3">
            Write about your day, distractions, or what helped you stay on track:
          </label>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            className="w-full h-64 border-2 border-gray-200 rounded-xl p-4 focus:border-green-500 focus:outline-none transition-colors duration-200 resize-none text-lg"
            placeholder="Start writing your daily reflection..."
          />
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={saveEntry}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            💾 Save Entry
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-8 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}