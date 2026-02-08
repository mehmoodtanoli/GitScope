import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchGitHubProfile } from "../services/githubApi";
import ProfileCard from "../components/ProfileCard";
import SkillsChart from "../components/SkillsChart";
import RepoList from "../components/RepoList";
import Loader from "../components/Loader";
import { FaArrowLeft } from "react-icons/fa";

const Dashboard = () => {
  const { username } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchGitHubProfile(username);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [username]);

  if (loading)
    return (
      <div className="min-h-screen bg-github-dark pt-20">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-github-dark flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">😕 {error}</h2>
        <Link to="/" className="text-github-accent hover:underline">
          Go Home
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-github-dark text-white p-4 md:p-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-github-secondary hover:text-white mb-6"
      >
        <FaArrowLeft /> Back to Search
      </Link>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Profile */}
        <div className="lg:col-span-1">
          <ProfileCard user={data.user} />
        </div>

        {/* Right Column: Skills & Repos */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <SkillsChart repos={data.repos} />
          <RepoList repos={data.repos} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
