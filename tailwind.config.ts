import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10201f",
        graphite: "#273331",
        sea: "#0f766e",
        moss: "#4f7b5c",
        paper: "#f8faf8",
        line: "#dbe5e0",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 32, 31, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
