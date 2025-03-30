import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Travel Planner</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/itinerary">Itinerary</Link>
      </div>
    </nav>
  );
}
