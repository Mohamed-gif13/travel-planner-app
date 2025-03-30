import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DestinationList from "../components/DestinationList";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-blue-100 p-6 rounded-lg shadow mb-6 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Plan Your Next Trip ✈️</h2>
        <p className="text-gray-700">Search for exciting destinations around the world!</p>
      </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <DestinationList searchTerm={searchTerm} />
    </div>
  );
}
