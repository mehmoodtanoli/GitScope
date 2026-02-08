import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg flex flex-col sm:flex-row gap-2 relative"
    >
      <div className="flex-1 relative">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-github-secondary" />
        <input
          type="text"
          placeholder="Enter GitHub Username..."
          className="w-full bg-github-card border border-github-border text-white pl-12 pr-4 py-4 rounded-lg outline-none focus:border-github-accent focus:ring-1 focus:ring-github-accent transition-all text-lg shadow-xl"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-github-btn hover:bg-github-btnHover text-white px-8 py-4 rounded-lg font-bold transition-all text-lg shadow-lg"
      >
        Analyze
      </button>
    </form>
  );
};

export default SearchBar;
