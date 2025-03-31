import { useEffect, useState } from "react";
import { getCurrentUser, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [itinerary, setItinerary] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate("/login"); // Rediriger s'il n'est pas connecté
    } else {
      setUser(currentUser);
      const saved = JSON.parse(localStorage.getItem("itinerary")) || [];
      setItinerary(saved);
    }
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">👤 Profil de l'utilisateur</h2>
        <p className="mb-4">📧 <strong>Email :</strong> {user?.email}</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">🧳 Vos destinations :</h3>
        {itinerary.length === 0 ? (
          <p className="text-gray-500">Aucune destination enregistrée.</p>
        ) : (
          <ul className="space-y-2">
            {itinerary.map((item) => (
              <li key={item.id} className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                {item.name}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={handleLogout}
          className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
