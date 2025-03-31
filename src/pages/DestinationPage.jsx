import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Weather from "../components/Weather";
import MapBox from "../components/MapBox";
import SkyscannerLinks from "../components/SkyscannerLinks";

// Données fictives simulées
const mockDestinations = [
  {
    id: 1,
    name: "Paris",
    description: "The City of Light, with iconic landmarks and romantic atmosphere.",
    image: "https://source.unsplash.com/600x400/?paris"
  },
  {
    id: 2,
    name: "Tokyo",
    description: "A futuristic city blending tradition and innovation.",
    image: "https://source.unsplash.com/600x400/?tokyo"
  },
  {
    id: 3,
    name: "Marrakech",
    description: "A vibrant Moroccan city with colorful souks and ancient medina.",
    image: "https://source.unsplash.com/600x400/?marrakech"
  },
];

export default function DestinationPage() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const found = mockDestinations.find((d) => d.id === parseInt(id));
    setDestination(found);
  }, [id]);

  const handleAddToItinerary = () => {
    const stored = JSON.parse(localStorage.getItem("itinerary")) || [];
    const alreadyAdded = stored.find((item) => item.id === destination.id);
    if (!alreadyAdded) {
      const updated = [...stored, destination];
      localStorage.setItem("itinerary", JSON.stringify(updated));
      setAdded(true);
    }
  };

  if (!destination) return <p>Destination not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">{destination.name}</h2>
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <p className="text-gray-700 mb-6">{destination.description}</p>

        <button
          onClick={handleAddToItinerary}
          disabled={added}
          className={`px-6 py-2 text-white font-semibold rounded ${
            added ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {added ? "Added to Itinerary ✅" : "Add to Itinerary"}
        </button>

        {/* Météo */}
        <Weather city={destination.name} />
        <MapBox city={destination.name} />
        <SkyscannerLinks city={destination.name} />
      </div>
    </div>
  );
}
