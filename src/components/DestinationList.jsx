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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {filtered.map(dest => (
        <Link
          to={`/destination/${dest.id}`}
          key={dest.id}
          className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 p-4 transform"
        >
          <div className="overflow-hidden rounded mb-3">
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-40 object-cover rounded transform hover:scale-105 transition duration-300"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{dest.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{dest.description}</p>
          <p className="text-xs text-blue-500 mt-2 italic">📌 Click to view more</p>
        </Link>
      ))}
      {filtered.length === 0 && (
        <p className="col-span-full text-center text-gray-500">No destinations found.</p>
      )}
    </div>
  );
}
