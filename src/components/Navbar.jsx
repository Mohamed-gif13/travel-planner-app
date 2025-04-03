import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; 

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <span className="text-3xl font-extrabold text-blue-600 dark:text-white rotate-icon">🌍</span>          <h1 className="text-xl font-bold text-blue-600 dark:text-white">Travel Planner</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex-grow text-center">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link to="/" className="text-gray-800 dark:text-white hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link to="/itinerary" className="text-gray-800 dark:text-white hover:text-blue-600">Itinerary</Link>
            </li>
            <li>
              <Link to="/profile" className="text-gray-800 dark:text-white hover:text-blue-600">Profile</Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-800 dark:text-white hover:text-blue-600">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="text-gray-800 dark:text-white hover:text-blue-600">Sign Up</Link>
            </li>
          </ul>
        </div>

        {/* Dark Mode Toggle on the right */}
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
