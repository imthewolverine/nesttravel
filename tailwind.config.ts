import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        ptSerif: ['PT Serif', 'serif'],
      },
      screens: {
        'mdplusone': '640px',
        'desktop': '1280px',
      },
      boxShadow: {
        'special': '0 4px 45px rgba(0, 0, 0, 0.05)',
        'question': '20px 20px 114px rgba(0, 0, 0, 0.05)',
        'reply': '4px 0px 100px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};
export default config;
