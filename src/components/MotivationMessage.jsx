// src/components/DailyMessage.jsx

export default function DailyMessage({ day }) {
  const messages = [
    "Your prefrontal cortex is getting stronger 💪 Keep going!",
    "New neural pathways forming 🔥 Stay consistent!",
    "Brain plasticity activated 🧠 You're doing great!",
    "Keep the neurons firing! 🚀 Habit progress is real!",
    "Your brain loves this routine! ❤️ Keep it up!",
  ];

  // Rotate messages based on the day number
  const message = messages[day % messages.length];

  return (
    <p className="mt-8 italic text-gray-700 max-w-md text-center">
      {message}
    </p>
  );
}
