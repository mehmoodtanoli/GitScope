import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (username) => {
    navigate(`/user/${username}`);
  };

  return (
    <div className="relative min-h-screen bg-github-dark text-github-text flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="text-center mb-12 animate-fade-in-up">
        <FaGithub className="text-7xl text-white mx-auto mb-6 drop-shadow-glow" />

        <h1 className="text-6xl font-extrabold text-white mb-4 tracking-tight">
          Git
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            lyzer
          </span>
        </h1>

        <p className="text-github-secondary text-xl max-w-2xl mx-auto leading-relaxed">
          Uncover the stories behind the code. Analyze GitHub profiles with
          <span className="text-github-text font-semibold">
            {" "}
            professional insights
          </span>
          .
        </p>
      </div>

      <div className="w-full max-w-xl animate-fade-in-up [animation-delay:200ms]">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="mt-12 flex gap-6 text-sm text-github-secondary animate-fade-in-up [animation-delay:400ms]">
        <span className="bg-github-card px-3 py-1 rounded-full border border-github-border">
          🚀 Fast Analysis
        </span>
        <span className="bg-github-card px-3 py-1 rounded-full border border-github-border">
          📊 Visual Charts
        </span>
        <span className="bg-github-card px-3 py-1 rounded-full border border-github-border">
          ✨ Zero Login
        </span>
      </div>
    </div>
  );
};
export default Home;
