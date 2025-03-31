import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 dark:text-blue-300"
        >
          🌍 Travel Planner
        </Link>

        {/* Navigation Links - always visible */}
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
          >
            Home
          </Link>
          <Link
            to="/itinerary"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
          >
            Itinerary
          </Link>
          <Link
            to="/profile"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign up
          </Link>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />
      </nav>
    </header>
  );
}
