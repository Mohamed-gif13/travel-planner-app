export default function SkyscannerLinks({ city }) {
    if (!city) return null;
  
    const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  
    return (
      <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-3">Book Your Trip 📦</h3>
        <ul className="list-disc pl-5 text-blue-600 dark:text-blue-400 space-y-2">
          <li>
            <a href={`https://www.skyscanner.com/transport/flights-from/${citySlug}/`} target="_blank" rel="noopener noreferrer">
              ✈️ Flights from {city}
            </a>
          </li>
          <li>
            <a href={`https://www.skyscanner.com/hotels/${citySlug}/`} target="_blank" rel="noopener noreferrer">
              🏨 Hotels in {city}
            </a>
          </li>
          <li>
            <a href={`https://www.skyscanner.com/car-hire/${citySlug}/`} target="_blank" rel="noopener noreferrer">
              🚗 Car rentals in {city}
            </a>
          </li>
        </ul>
      </div>
    );
  }
  