import { useEffect, useState } from "react";

const TripAdvisorResults = ({ city }) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (!city) return;

    const fetchPlaces = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };

      try {
        const res = await fetch(
          `https://travel-advisor.p.rapidapi.com/locations/search?query=${city}&limit=10`,
          options
        );
        const data = await res.json();
        const filteredData = data.data.filter(item =>
          ['attraction', 'restaurant', 'lodging'].includes(item.result_type)
        );
        setPlaces(filteredData);
      } catch (error) {
        console.error("TripAdvisor API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [city]);

  if (!city) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-300 mb-6">
        Popular places in {city}
      </h2>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {["all", "restaurant", "lodging", "attraction"].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === type
                ? "bg-purple-700 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            }`}
          >
            {type === "all" && "All"}
            {type === "restaurant" && "Restaurants 🍽️"}
            {type === "lodging" && "Hotels 🏨"}
            {type === "attraction" && "Attractions 🗺️"}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading suggestions...</p>
      ) : places.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {places
            .filter(place => filter === "all" || place.result_type === filter)
            .map((place, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4"
              >
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  {place.result_object?.name}
                </h3>
                {place.result_object?.photo && (
                  <img
                    src={place.result_object.photo.images.original.url}
                    alt={place.result_object.name}
                    className="w-full h-48 object-cover rounded-xl mb-2"
                  />
                )}
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Type: {place.result_type}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Rating: {place.result_object?.rating || "N/A"} ⭐
                </p>
                <a
                  href={place.result_object?.web_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 underline mt-2 inline-block"
                >
                  View on TripAdvisor
                </a>
              </div>
            ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No results found for this city.</p>
      )}
    </div>
  );
};

export default TripAdvisorResults;
