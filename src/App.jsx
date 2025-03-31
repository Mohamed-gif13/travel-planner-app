import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ItineraryPage from "./pages/ItineraryPage";
import DestinationPage from "./pages/DestinationPage";

export default function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white transition-colors duration-300">
      <Router>
        <Navbar />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itinerary" element={<ItineraryPage />} />
            <Route path="/destination/:id" element={<DestinationPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
