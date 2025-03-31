import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-300">
          🌍 Travel Planner
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/itinerary"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Itinerary
          </Link>
          <Link
            to="/profile"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            👤 Profile
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
