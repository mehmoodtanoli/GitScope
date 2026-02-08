import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { calculateLanguages } from "../utils/languageAnalyzer";

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillsChart = ({ repos }) => {
  const { labels, data } = calculateLanguages(repos);

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        borderWidth: 1,
        borderColor: "#161b22",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "right", labels: { color: "#c9d1d9" } },
    },
  };

  return (
    <div className="bg-github-card p-6 rounded-lg border border-github-border h-full animate-fade-in">
      <h3 className="text-lg font-semibold text-white mb-4">Top Languages</h3>
      <div className="h-64 flex justify-center">
        {data.length > 0 ? (
          <Doughnut data={chartData} options={options} />
        ) : (
          <p>No language data available</p>
        )}
      </div>
    </div>
  );
};
export default SkillsChart;
