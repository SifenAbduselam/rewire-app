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
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2">Daily Reflection 📝</h2>
      <p className="mb-2 text-gray-600">Date: {today}</p>
      <p className="mb-4 text-gray-600">Write about your day, distractions, or what helped you stay on track.</p>
      
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        className="w-full h-48 border rounded-xl p-4"
        placeholder="Start writing..."
      />
      
      <div className="flex gap-4 mt-4">
        <button
          onClick={saveEntry}
          className="bg-indigo-600 text-white py-2 px-6 rounded-xl hover:bg-indigo-700 transition"
        >
          Save
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-300 text-black py-2 px-6 rounded-xl hover:bg-gray-400 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}