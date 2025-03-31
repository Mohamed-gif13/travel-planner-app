import CitySearch from "../components/CitySearch";
import DestinationList from "../components/DestinationList";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 transition-all duration-300">
      <div className="bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 text-center p-10 rounded-lg shadow-lg mb-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          🌍 Global Travel Planner
        </h2>
        <p className="text-gray-700 dark:text-gray-200 text-lg">
          Discover any city in the world, check the weather, explore the location, and plan your trip!
        </p>
      </div>

      {/* New global city search component */}
      <CitySearch />
    </div>
  );
}
