import { useEffect, useState } from "react";

export default function Itinerary() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("itinerary")) || [];
    setItems(saved);
  }, []);

  const handleRemove = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("itinerary", JSON.stringify(updated));
  };

  if (items.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        No itinerary saved.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-xl transition-all flex flex-col"
        >
          <img
            src={item.image || "/fallback.jpg"}
            alt={item.name}
            className="h-48 w-full object-cover rounded mb-4"
          />
          <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
            {item.name}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {item.description}
          </p>
          <button
            onClick={() => handleRemove(item.id)}
            className="mt-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}
