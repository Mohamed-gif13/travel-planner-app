import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDarkMode(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:opacity-80 transition"
    >
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
