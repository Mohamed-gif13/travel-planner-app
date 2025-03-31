// utils/api.js

// API Keys (These should be stored in your .env file)
const API_KEY_PIXABAY = import.meta.env.VITE_PIXABAY_API_KEY;
const API_KEY_WEATHER = import.meta.env.VITE_WEATHER_API_KEY;
const API_KEY_GEOAPIFY = import.meta.env.VITE_GEOAPIFY_API_KEY;

// Function to fetch images of a city from Pixabay API
export const fetchCityImages = async (city) => {
  const url = `https://pixabay.com/api/?key=${API_KEY_PIXABAY}&q=${encodeURIComponent(city)}&image_type=photo`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.hits && data.hits.length > 0) {
      return data.hits[0].webformatURL; // Return the first image from the result
    } else {
      throw new Error("No image found");
    }
  } catch (error) {
    console.error("Error fetching city images:", error);
    return null;
  }
};

// Function to fetch weather data for a city from OpenWeatherMap API
export const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY_WEATHER}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200) {
      return data; // Return the weather data if the response is successful
    } else {
      throw new Error("Weather data not found");
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null; // Return null if there's an error
  }
};

// Function to fetch the location (latitude, longitude) of a city using Geoapify API
export const fetchCityLocation = async (city) => {
  const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(city)}&apiKey=${API_KEY_GEOAPIFY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      const { lat, lon } = data.features[0].properties;
      return { lat, lon }; // Return the latitude and longitude of the city
    } else {
      throw new Error("Location not found");
    }
  } catch (error) {
    console.error("Error fetching city location:", error);
    return null;
  }
};
