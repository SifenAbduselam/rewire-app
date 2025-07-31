// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import BrainVisual from "../components/BrainVisual";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-6 text-center">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">
        Rewire Your Brain 🧠
      </h1>

      <p className="text-lg text-gray-600 mb-8 max-w-xl">
        Pick a new habit, stick with it, and rewire your brain to become the best version of yourself.
      </p>

      <div className="mb-8">
        <BrainVisual day={1} />
      </div>

      <button 
        onClick={() => navigate("/pickhabit")}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
}