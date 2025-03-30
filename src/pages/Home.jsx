import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DestinationList from "../components/DestinationList";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Plan Your Next Trip</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <DestinationList searchTerm={searchTerm} />
    </div>
  );
}
