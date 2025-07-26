import React from "react";
import { useNavigate } from "react-router-dom";
import BrainVisual from "../components/BrainVisual";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
          Rewire Your Brain 🧠
        </h1>

        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Transform your habits, transform your life. Build neural pathways that serve your best self.
        </p>

        <div className="flex justify-center mb-10">
          <BrainVisual day={1} />
        </div>

        <button 
          onClick={() => navigate("/pickhabit")}
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
        >
          Start Your Journey →
        </button>
      </div>
    </div>
  );
};

export default Home;