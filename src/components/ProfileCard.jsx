import {
  FaUsers,
  FaMapMarkerAlt,
  FaLink,
  FaTwitter,
  FaBuilding,
} from "react-icons/fa";

const ProfileCard = ({ user }) => {
  return (
    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden animate-fade-in-up">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 -z-10"></div>

      <div className="flex flex-col items-center md:items-start relative z-10 mt-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full border-4 border-github-bg shadow-lg mb-4 bg-github-bg"
        />

        <h2 className="text-3xl font-bold text-white tracking-tight">
          {user.name || user.login}
        </h2>
        <a
          href={user.html_url}
          target="_blank"
          className="text-github-accent hover:underline mb-4 font-mono text-sm"
        >
          @{user.login}
        </a>

        <p className="text-github-text mb-6 text-center md:text-left leading-relaxed">
          {user.bio ||
            "This user prefers to keep an air of mystery about them."}
        </p>

        <div className="grid grid-cols-2 w-full gap-4 mb-6">
          <div className="bg-github-bg/50 p-3 rounded-lg text-center border border-github-border">
            <span className="block text-xl font-bold text-white">
              {user.followers}
            </span>
            <span className="text-xs text-github-muted uppercase tracking-wider">
              Followers
            </span>
          </div>
          <div className="bg-github-bg/50 p-3 rounded-lg text-center border border-github-border">
            <span className="block text-xl font-bold text-white">
              {user.following}
            </span>
            <span className="text-xs text-github-muted uppercase tracking-wider">
              Following
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-github-muted w-full">
          {user.company && (
            <div className="flex items-center gap-2">
              <FaBuilding className="text-github-accent" /> {user.company}
            </div>
          )}
          {user.location && (
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-github-accent" /> {user.location}
            </div>
          )}
          {user.blog && (
            <div className="flex items-center gap-2">
              <FaLink className="text-github-accent" />{" "}
              <a
                href={user.blog}
                target="_blank"
                className="hover:text-white truncate"
              >
                {user.blog}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
