import { useState } from "react";
import RepoCard from "./RepoCard"; // Import the new component

const RepoList = ({ repos }) => {
  const [filter, setFilter] = useState("");

  const filteredRepos = repos
    .filter((repo) => repo.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  return (
    <div className="mt-6 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">Top Repositories</h3>
        <input
          type="text"
          placeholder="Find a repo..."
          className="bg-github-dark border border-github-border rounded px-3 py-1 text-sm focus:border-github-accent outline-none text-white"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} /> // Using the new component here
        ))}
      </div>
    </div>
  );
};
export default RepoList;
