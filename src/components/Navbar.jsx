import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">🌍 Travel Planner</Link>
        </h1>
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/itinerary" className="hover:underline">Itinerary</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
