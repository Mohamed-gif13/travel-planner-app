import Itinerary from "../components/Itinerary";

export default function ItineraryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 transition duration-300">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          🧳 Your Travel Itinerary
        </h1>
        <Itinerary />
      </div>
    </div>
  );
}
