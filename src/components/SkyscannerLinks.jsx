export default function SkyscannerLinks({ city }) {
    if (!city) return null;
  
    const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  
    const links = [
      {
        title: "✈️ Flights",
        desc: `Find best flights from ${city}`,
        url: `https://www.skyscanner.com/transport/flights-from/${citySlug}/`,
      },
      {
        title: "🏨 Hotels",
        desc: `Book hotels in ${city} with ease`,
        url: `https://www.skyscanner.com/hotels/${citySlug}/`,
      },
      {
        title: "🚗 Car Rentals",
        desc: `Rent a car in ${city} for your trip`,
        url: `https://www.skyscanner.com/car-hire/${citySlug}/`,
      },
    ];
  
    return (
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">📦 Travel Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{link.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{link.desc}</p>
              </div>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  