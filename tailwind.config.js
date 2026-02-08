/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // We will add this font in step 2
      },
      colors: {
        github: {
          bg: "#0d1117", // Deepest background
          card: "#161b22", // Card background
          border: "#30363d", // Subtle border
          text: "#c9d1d9", // Main text
          muted: "#8b949e", // Secondary text
          accent: "#58a6ff", // Blue link/accent
          success: "#238636", // Green button
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(88, 166, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
