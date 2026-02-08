export const calculateLanguages = (repos) => {
  const langStats = {};

  repos.forEach((repo) => {
    if (repo.language) {
      langStats[repo.language] = (langStats[repo.language] || 0) + 1;
    }
  });

  const sorted = Object.entries(langStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6); // Top 6 languages

  return {
    labels: sorted.map(([key]) => key),
    data: sorted.map(([, value]) => value),
  };
};
