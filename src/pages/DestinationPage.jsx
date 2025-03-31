import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCityImages, fetchWeather, fetchCityLocation } from "../utils/api"; // Import des fonctions d'API
import Weather from "../components/Weather";
import MapBox from "../components/MapBox";
import SkyscannerLinks from "../components/SkyscannerLinks";

const mockDestinations = [
  {
    id: 1,
    name: "Paris",
    description: "The City of Light, with iconic landmarks and romantic atmosphere.",
  },
  {
    id: 2,
    name: "Tokyo",
    description: "A futuristic city blending tradition and innovation.",
  },
  {
    id: 3,
    name: "Marrakech",
    description: "A vibrant Moroccan city with colorful souks and ancient medina.",
  },
];

export default function DestinationPage() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [added, setAdded] = useState(false);
  const [image, setImage] = useState(null);
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const found = mockDestinations.find((d) => d.id === parseInt(id));
    if (found) {
      setDestination(found);
      const stored = JSON.parse(localStorage.getItem("itinerary")) || [];
      const alreadyAdded = stored.some((item) => item.id === found.id);
      setAdded(alreadyAdded);
      
      // Fetch image, weather, and location data
      fetchCityImages(found.name).then(setImage);
      fetchWeather(found.name).then(setWeather);
      fetchCityLocation(found.name).then(setLocation);
    }
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

  if (!destination)
    return (
      <div className="text-center text-gray-600 dark:text-gray-300 py-20">
        <p>❌ Destination not found.</p>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-xl p-8 transition duration-300">
        <h2 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-6">
          {destination.name}
        </h2>

        <img
          src={image || "/fallback.jpg"} // Affiche l'image récupérée ou une image par défaut
          alt={destination.name}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />

        <p className="text-lg mb-6 text-center">{destination.description}</p>

        <div className="flex justify-center mb-8">
          <button
            onClick={handleAddToItinerary}
            disabled={added}
            className={`px-6 py-3 text-white font-bold rounded-lg shadow transition duration-300 ${
              added
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {added ? "✅ Added to Itinerary" : "➕ Add to Itinerary"}
          </button>
        </div>

        {/* Display Weather Data */}
        {weather && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Weather in {destination.name}</h3>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].description}</p>
          </div>
        )}

        {/* Map and Skyscanner links */}
        {location && (
          <div className="mb-8">
            <MapBox city={destination.name} location={location} />
          </div>
        )}
        <SkyscannerLinks city={destination.name} />
      </div>
    </div>
  );
}
