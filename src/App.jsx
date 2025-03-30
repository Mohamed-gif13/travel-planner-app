import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ItineraryPage from "./pages/ItineraryPage";
import DestinationPage from "./pages/DestinationPage";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itinerary" element={<ItineraryPage />} />
            <Route path="/destination/:id" element={<DestinationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
