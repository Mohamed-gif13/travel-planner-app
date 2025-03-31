import Itinerary from "../components/Itinerary";

export default function ItineraryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 transition duration-300">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded shadow p-6">
        <h1 className="text-3xl font-bold text-center mb-6">✈️ Your Travel Itinerary</h1>
        <Itinerary />
      </div>
    </div>
  );
}
