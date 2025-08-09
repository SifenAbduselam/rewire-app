// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import BrainVisual from "../components/BrainVisual";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">
            Rewire Your Brain 🧠
          </h1>
          <p className="text-gray-600 mb-8 text-base sm:text-lg">
            Build better habits, one day at a time
          </p>
          <div className="flex justify-center mb-6">
            <BrainVisual day={0} />
          </div>
          <button 
            onClick={() => navigate("/pickhabit")}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-base sm:text-lg font-medium"
          >
            Start Building Habits
          </button>
        </div>

        {/* Neuroplasticity Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-4 text-center">
            🧠 The Science of Brain Rewiring
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Brain Image Section */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg p-4 mb-4 w-full flex justify-center">
                <div className="text-6xl">🧠</div>
              </div>
              <p className="text-sm text-gray-600 text-center italic">
                "Neurons that fire together, wire together" - Donald Hebb
              </p>
            </div>
            
            {/* Information Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Neuroplasticity: Your Brain's Superpower
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Your brain can physically change throughout your life. Every time you repeat a thought, 
                feeling, or action, you strengthen neural pathways - literally reshaping your brain.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">New habits create new neural pathways</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">Repetition strengthens these pathways</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">21 days is enough to form lasting changes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Motivational Quotes Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 text-white mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
            💡 Inspiration for Your Journey
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="italic mb-2">"The brain is like a muscle - the more you use it in a certain way, the stronger that pathway becomes."</p>
              <p className="text-sm opacity-90">- Neuroscience Research</p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="italic mb-2">"Every time you choose your new response over your old reaction, you're rewiring your brain."</p>
              <p className="text-sm opacity-90">- Habit Psychology</p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="italic mb-2">"Small consistent actions create massive changes in your brain chemistry and structure."</p>
              <p className="text-sm opacity-90">- Neuroplasticity Studies</p>
            </div>
          </div>
        </div>

        {/* Science Facts */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-4 text-center">
            🔬 Did You Know?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">⚡ 21 Days Magic</h3>
              <p className="text-blue-700 text-sm">
                Research shows that 21 days of consistent practice can create measurable changes in brain activity.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">🌟 10,000 Connections</h3>
              <p className="text-green-700 text-sm">
                Your brain has 100+ trillion neural connections that can be strengthened through repetition.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">🔄 Daily Rewiring</h3>
              <p className="text-purple-700 text-sm">
                Each day you practice a new habit, your brain literally builds new neural pathways.
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-800 mb-2">💪 Your Potential</h3>
              <p className="text-orange-700 text-sm">
                Your brain is 4x more plastic than any other organ - you have incredible power to change!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}