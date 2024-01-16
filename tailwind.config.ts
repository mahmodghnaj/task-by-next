import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-100": "#ffffff",
        "base-200": "#F2F2F2",
        "base-content": "#1f2937",
      },
    },
  },
  plugins: [],
};
export default config;
