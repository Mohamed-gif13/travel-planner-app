import Itinerary from "../components/Itinerary";

export default function ItineraryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="bg-white rounded shadow p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          ✈️ Your Travel Itinerary
        </h1>
        <Itinerary />
      </div>
    </div>
  );
}
