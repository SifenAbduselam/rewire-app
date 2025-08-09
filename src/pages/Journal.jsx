// src/pages/Journal.jsx
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
    <div className="p-4 sm:p-6 max-w-xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Daily Reflection 📝</h2>
      <p className="mb-2 text-gray-600 text-sm sm:text-base">Date: {today}</p>
      <p className="mb-4 text-gray-600 text-sm">Write about your day, distractions, or what helped you stay on track.</p>
      
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        className="w-full h-40 sm:h-48 border rounded-lg sm:rounded-xl p-3 sm:p-4 text-sm sm:text-base"
        placeholder="Start writing..."
      />
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
        <button
          onClick={saveEntry}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-indigo-600 text-white rounded-lg sm:rounded-xl hover:bg-indigo-700 transition text-sm sm:text-base flex-1"
        >
          Save
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-300 text-black rounded-lg sm:rounded-xl hover:bg-gray-400 transition text-sm sm:text-base flex-1"
        >
          Back
        </button>
      </div>
    </div>
  );
}