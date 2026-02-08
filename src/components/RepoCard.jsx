import {
  FaStar,
  FaCodeBranch,
  FaCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

const RepoCard = ({ repo }) => {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col justify-between h-full bg-github-card p-6 rounded-xl border border-github-border transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:border-github-accent/50"
    >
      <div>
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-white font-bold text-lg break-all group-hover:text-github-accent transition-colors">
            {repo.name}
          </h4>
          <FaExternalLinkAlt className="text-xs text-github-muted opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <p className="text-sm text-github-muted mb-6 line-clamp-2 leading-relaxed">
          {repo.description || "No description provided."}
        </p>
      </div>

      <div className="flex items-center gap-4 text-xs font-medium text-github-muted border-t border-github-border pt-4 mt-auto">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <FaCircle className="text-[10px] text-purple-400" /> {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1.5 hover:text-white transition-colors">
          <FaStar className="text-yellow-500" /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1.5 hover:text-white transition-colors">
          <FaCodeBranch /> {repo.forks_count}
        </span>
      </div>
    </a>
  );
};

export default RepoCard;
