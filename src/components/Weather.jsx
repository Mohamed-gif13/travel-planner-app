import { useEffect, useState } from "react";

export default function Weather({ city }) {
  const [weather, setWeather] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (!city) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeather(data);
        } else {
          setWeather(null);
        }
      })
      .catch((err) => console.error("Weather fetch error:", err));
  }, [city]);

  if (!weather) return <p className="text-sm text-gray-500">Weather unavailable</p>;

  return (
    <div className="bg-blue-50 p-4 rounded shadow mt-4 flex items-center gap-4">
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="w-16 h-16"
      />
      <div>
        <h4 className="text-lg font-semibold">{weather.name}</h4>
        <p>{weather.weather[0].description}</p>
        <p className="font-bold">{weather.main.temp}°C</p>
      </div>
    </div>
  );
}
