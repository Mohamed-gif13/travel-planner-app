import { useParams } from "react-router-dom";

export default function DestinationPage() {
  const { id } = useParams();

  // Pour l’instant, on simule les données
  const destination = {
    id,
    name: "Paris",
    description: "Detailed description about Paris...",
    image: "https://source.unsplash.com/600x400/?paris",
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{destination.name}</h2>
      <img src={destination.image} alt={destination.name} className="rounded shadow mb-4" />
      <p>{destination.description}</p>
    </div>
  );
}
