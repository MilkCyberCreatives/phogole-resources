import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "var(--brand-primary)",
        "brand-secondary": "var(--brand-secondary)",
      },
    },
  },
  plugins: [],
};

export default config;
