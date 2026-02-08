import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export const fetchGitHubProfile = async (username) => {
  const cacheKey = `gitlyzer_${username}`;
  const cachedData = localStorage.getItem(cacheKey);

  // Cache Strategy: Serve immediately if exists
  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    // Cache expiry: 1 hour (3600000 ms)
    if (Date.now() - timestamp < 3600000) {
      return data;
    }
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      axios.get(`${BASE_URL}/${username}`),
      axios.get(`${BASE_URL}/${username}/repos?per_page=100&sort=updated`),
    ]);

    const profileData = {
      user: userRes.data,
      repos: reposRes.data,
    };

    localStorage.setItem(
      cacheKey,
      JSON.stringify({
        data: profileData,
        timestamp: Date.now(),
      })
    );

    return profileData;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("User not found");
    }
    throw new Error("API Limit Reached or Network Error");
  }
};
