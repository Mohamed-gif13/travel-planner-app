import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DestinationPage from "./pages/DestinationPage";
import ItineraryPage from "./pages/ItineraryPage";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat transition-all"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      <div className="bg-white/70 dark:bg-gray-900/80 min-h-screen">
        <Router>
          <Navbar />
          <main className="pt-20 pb-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destination/:id" element={<DestinationPage />} />
              <Route path="/itinerary" element={<ItineraryPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
