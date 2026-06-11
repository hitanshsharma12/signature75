import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        luxe: "0 20px 80px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "radial-luxe":
          "radial-gradient(circle at top, rgba(212,175,55,0.28), transparent 34%), radial-gradient(circle at bottom right, rgba(255,255,255,0.12), transparent 36%)",
      },
    },
  },
  plugins: [],
};
export default config;
