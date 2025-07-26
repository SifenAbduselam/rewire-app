// src/components/ProgressBar.jsx
export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
      <div
        className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
