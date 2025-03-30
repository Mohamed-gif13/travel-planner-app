import { Link } from "react-router-dom";

const mockDestinations = [
  {
    id: 1,
    name: "Paris",
    description: "The City of Light, with iconic landmarks and romantic atmosphere.",
    image: "https://source.unsplash.com/400x300/?paris"
  },
  {
    id: 2,
    name: "Tokyo",
    description: "A futuristic city blending tradition and innovation.",
    image: "https://source.unsplash.com/400x300/?tokyo"
  },
  {
    id: 3,
    name: "Marrakech",
    description: "A vibrant Moroccan city with colorful souks and ancient medina.",
    image: "https://source.unsplash.com/400x300/?marrakech"
  },
];

export default function DestinationList({ searchTerm }) {
  const filtered = mockDestinations.filter(dest =>
    dest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filtered.map(dest => (
        <Link
          to={`/destination/${dest.id}`}
          key={dest.id}
          className="block border rounded shadow p-4 hover:bg-gray-100 transition"
        >
          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-40 object-cover rounded mb-2"
          />
          <h3 className="text-xl font-semibold">{dest.name}</h3>
          <p className="text-sm text-gray-600">{dest.description}</p>
        </Link>
      ))}
      {filtered.length === 0 && <p>No destinations found.</p>}
    </div>
  );
}
