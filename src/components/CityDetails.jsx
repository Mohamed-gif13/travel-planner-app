// src/components/CityDetails.jsx
import { useState, useEffect } from "react";
import { fetchCityImages, fetchWeather, fetchCityLocation } from "../utils/api";

const CityDetails = ({ city }) => {
  const [image, setImage] = useState(null);
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const loadCityData = async () => {
      const img = await fetchCityImages(city);
      setImage(img);
      
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
      
      const loc = await fetchCityLocation(city);
      setLocation(loc);
    };

    loadCityData();
  }, [city]);

  return (
    <div className="city-details">
      <div className="city-image">
        <img src={image} alt={city} />
      </div>
      <div className="city-weather">
        <p>{weather?.main?.temp}°C</p>
        {/* Additional weather info */}
      </div>
      <div className="city-location">
        <p>Latitude: {location?.lat}</p>
        <p>Longitude: {location?.lon}</p>
      </div>
    </div>
  );
};

export default CityDetails;
