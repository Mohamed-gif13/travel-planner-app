// src/components/SearchBar.jsx
export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full border border-gray-300 rounded-md p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
  }
  