import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DestinationList from "../components/DestinationList";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-6xl mx-auto px-4 transition-all duration-300">
      <div className="bg-blue-100 dark:bg-blue-900 text-center p-6 rounded-lg shadow mb-6 text-gray-800 dark:text-white transition">
        <h2 className="text-3xl font-bold mb-2">Plan Your Next Trip ✈️</h2>
        <p className="text-gray-700 dark:text-gray-300">Search for exciting destinations around the world!</p>
      </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <DestinationList searchTerm={searchTerm} />
    </div>
  );
}
