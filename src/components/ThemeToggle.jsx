import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("auto");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (theme === "auto" && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="glass-panel px-3 py-2 rounded-full flex items-center gap-2 border border-github-border">
        <button
          className="text-sm px-2 py-1 rounded bg-github-card text-github-text hover:bg-github-border"
          onClick={() => setTheme("light")}
        >
          Light
        </button>
        <button
          className="text-sm px-2 py-1 rounded bg-github-card text-github-text hover:bg-github-border"
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
        <button
          className="text-sm px-2 py-1 rounded bg-github-card text-github-text hover:bg-github-border"
          onClick={() => setTheme("auto")}
        >
          Auto
        </button>
      </div>
    </div>
  );
}
