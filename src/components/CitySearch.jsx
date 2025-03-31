import { useState, useEffect } from "react";
import Weather from "./Weather";
import SkyscannerLinks from "./SkyscannerLinks";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Configuration de l'icône par défaut de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function CitySearch() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

  useEffect(() => {
    if (!search) return;
    setLoading(true);
    fetch(`https://api.geoapify.com/v1/geocode/search?text=${search}&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          const { lat, lon } = data.features[0].properties;
          setPosition([lat, lon]);
        } else {
          setPosition(null);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setSearch(city.trim());
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="flex items-center gap-4 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a city (e.g. Paris)"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-500">Searching...</p>}

      {position && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-700 dark:text-blue-300">
            📍 {search}
          </h2>

          {/* ✅ Image avec Fallback */}
          <div className="w-full h-64 mb-4 rounded overflow-hidden">
            <img
              src={`https://source.unsplash.com/800x400/?city,${search}&sig=1`}
              alt={search}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "/fallback.jpg"; // ✅ Fichier dans /public
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Weather */}
            <Weather city={search} />

            {/* Map */}
            <div className="h-64 rounded overflow-hidden">
              <MapContainer center={position} zoom={12} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                  attribution='&copy; OpenStreetMap'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>{search}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Skyscanner Booking Links */}
          <SkyscannerLinks city={search} />
        </div>
      )}
    </div>
  );
}
