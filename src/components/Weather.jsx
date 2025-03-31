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

          // 🎵 Weather sound
          const condition = data.weather[0].main.toLowerCase();
          let sound;

          if (condition.includes("rain")) {
            sound = new Audio("/sounds/Rain sound.mp3");
          } else if (condition.includes("clear")) {
            sound = new Audio("/sounds/birds sound.mp3");
          } else if (condition.includes("thunder")) {
            sound = new Audio("/sounds/thunder sound.mp3");
          } else if (condition.includes("snow")) {
            sound = new Audio("/sounds/Snow-Storm sound.mp3");
          }

          if (sound) {
            sound.volume = 0.1;
            sound.loop = true;
            sound.play().catch((err) =>
              console.warn("Audio play blocked by browser:", err)
            );
          }

        } else {
          setWeather(null);
        }
      })
      .catch((err) => console.error("Weather fetch error:", err));
  }, [city]);

  if (!weather)
    return <p className="text-sm text-gray-500">Weather unavailable</p>;

  // 🎨 Weather emoji 
  const icon = weather.weather[0].main;
  let emoji = "🌡️";

  if (icon.includes("Cloud")) emoji = "☁️";
  else if (icon.includes("Rain")) emoji = "🌧️";
  else if (icon.includes("Clear")) emoji = "☀️";
  else if (icon.includes("Snow")) emoji = "❄️";
  else if (icon.includes("Thunderstorm")) emoji = "⛈️";
  else if (icon.includes("Drizzle")) emoji = "🌦️";
  else if (icon.includes("Mist")) emoji = "🌫️";

  return (
    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded shadow mt-4 flex items-center gap-4">
      <div className="text-5xl">{emoji}</div>
      <div>
        <h4 className="text-lg font-semibold">{weather.name}</h4>
        <p className="capitalize">{weather.weather[0].description}</p>
        <p className="font-bold text-xl">{weather.main.temp}°C</p>
      </div>
    </div>
  );
}
