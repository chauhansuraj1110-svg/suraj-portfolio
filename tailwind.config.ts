import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] },
      colors: {
        ink: "#0b1730",
        navy: "#0b1f3a",
        accent: "#1687f8",
        mist: "#f4f8fc"
      },
      boxShadow: { soft: "0 12px 36px rgba(13, 39, 76, .08)" }
    }
  },
  plugins: []
};
export default config;
