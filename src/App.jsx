// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import PickHabit from "./pages/PickHabit";
import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import Completion from "./pages/Completion";
import MyHabits from "./pages/MyHabits"; // Add this

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pickhabit" element={<PickHabit />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/completion" element={<Completion />} />
      <Route path="/myhabits" element={<MyHabits />} /> {/* Add this */}
    </Routes>
  );
}