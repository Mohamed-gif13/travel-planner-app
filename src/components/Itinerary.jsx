// src/components/Itinerary.jsx

import { useEffect, useState } from "react";
import ItineraryItem from "./ItineraryItem";

export default function Itinerary() {
  const [items, setItems] = useState([]);

  // Charger les données depuis localStorage au démarrage
  useEffect(() => {
    const stored = localStorage.getItem("itinerary");
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  // Supprimer une destination
  const handleRemove = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("itinerary", JSON.stringify(updated));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Itinerary</h2>
      {items.length === 0 ? (
        <p>No destinations added yet.</p>
      ) : (
        items.map((item) => (
          <ItineraryItem key={item.id} item={item} onRemove={handleRemove} />
        ))
      )}
    </div>
  );
}
