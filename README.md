# Travel Planner App

A modern travel planning web application built with **React**, **Tailwind CSS**, and various APIs to help users explore destinations, get weather updates, view maps, and book their trips.

---

## Main Features

- Destination search with real-time suggestions
- Interactive map using Geoapify + Leaflet
- Live weather information (OpenWeatherMap API)
- Dynamic city images (Unsplash)
- Travel booking links (Flights, Hotels, Cars) via Skyscanner
- seraching restaurants; hotels; and attractions by using TripAdvisor.
- Create and manage a personal 

**travel itinerary**
- Simple authentication (Signup/Login) using `localStorage`
- Light/Dark mode toggle
- Weather-based sound effects and emoji animations

---

### Technologies Used

- **React.js** with React Router
- **Tailwind CSS** for styling
- **React Leaflet** for maps
-   `localStorage` for auth and itinerary persistence
- **APIs Integrated**:
  - Geoapify (geolocation + city search)
  - OpenWeatherMap (live weather data)
  - Unsplash (city photos)
  - Skyscanner (booking links)
  - TripAdvisor (restaurants, hotels, attractions)

---

#### App Structure

📁 travel-planner-app/
│
├── public/
│   ├── background.jpg — Background image
│   ├── fallback.jpg — Fallback city image
│   └── sounds/ — Weather sound effects (rain.mp3, sunny.mp3, etc.)
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx — Navigation bar
│   │   ├── Footer.jsx — Footer of the app
│   │   ├── SearchBar.jsx — Search input
│   │   ├── DestinationList.jsx — Display search results
│   │   ├── Weather.jsx — Fetch and display weather
│   │   ├── MapBox.jsx — Interactive maps using Leaflet
│   │   ├── SkyscannerLinks.jsx — Flight & hotel booking
│   │   └── ThemeToggle.jsx — Light/dark mode switch
│   │
│   ├── pages/
│   │   ├── Home.jsx — Main landing page
│   │   ├── DestinationPage.jsx — Individual destination info
│   │   ├── ItineraryPage.jsx — Saved trip planner
│   │   ├── Profile.jsx — User profile & logout
│   │   ├── Login.jsx — User login
│   │   └── Signup.jsx — User registration
│   │
│   ├── services/
│   │   └── authService.js — Local auth logic (register, login, etc.)
│   │
│   ├── App.jsx — Main app component with routing
│   ├── main.jsx — Entry point
│   └── index.css — Tailwind base styles
│
├── .env — API keys
├── package.json — Project metadata & dependencies
├── tailwind.config.js — Tailwind config
├── postcss.config.js — PostCSS config
├── vite.config.js — Vite bundler config
└── README.md — Project documentation

👨‍💻 Author
Mohamed AL IBRAHIMI  – ALX Frontend Developer (Certification Final Project)

📄 License
This project was developed for educational purposes as part of a Frontend Development Certification.
