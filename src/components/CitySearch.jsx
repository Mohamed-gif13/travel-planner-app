import { useState, useEffect } from "react";
import Weather from "./Weather";
import MapBox from "./MapBox";
import SkyscannerLinks from "./SkyscannerLinks";
import TripAdvisorResults from "./TripAdvisorResults";

export default function CitySearch() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [added, setAdded] = useState(false);

  const GEO_API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;
  const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

  useEffect(() => {
    if (!search) return;

    fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${search}&apiKey=${GEO_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          const { lat, lon } = data.features[0].properties;
          setPosition([lat, lon]);

          const stored = JSON.parse(localStorage.getItem("itinerary")) || [];
          const already = stored.find(
            (item) => item.name.toLowerCase() === search.toLowerCase()
          );
          setAdded(!!already);
        } else {
          setPosition(null);
        }
      });

    fetch(
      `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
        search
      )}&image_type=photo&per_page=3&safesearch=true`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.hits && data.hits.length > 0) {
          setImageUrl(data.hits[0].webformatURL);
        } else {
          setImageUrl(null);
        }
      });
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setSearch(city.trim());
    }
  };

  const handleAddToItinerary = () => {
    const newItem = {
      id: Date.now(),
      name: search,
      description: `Explore ${search}, a fascinating destination`,
      image: imageUrl,
    };
    const stored = JSON.parse(localStorage.getItem("itinerary")) || [];
    const updated = [...stored, newItem];
    localStorage.setItem("itinerary", JSON.stringify(updated));
    setAdded(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search a city (e.g. Paris)"
          className="flex-grow px-4 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {position && (
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow p-6">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-700 dark:text-blue-300">
            📍 {search}
          </h2>

          {imageUrl && (
            <img
              src={imageUrl}
              alt={search}
              className="w-full h-64 object-cover rounded mb-4"
            />
          )}

          <p className="text-center mb-4">Explore the beautiful city of {search} and plan your trip with us!</p>

          <div className="flex justify-center mb-6">
            <button
              onClick={handleAddToItinerary}
              disabled={added}
              className={`px-6 py-2 text-white font-semibold rounded ${
                added ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {added ? "✅ Added to Itinerary" : "➕ Add to Itinerary"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Weather city={search} />
            <MapBox city={search} />
          </div>

          <SkyscannerLinks city={search} />
          <TripAdvisorResults city={search} />

        </div>
      )}
    </div>
  );
}
