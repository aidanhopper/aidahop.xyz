import type { Config } from "tailwindcss";

const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%' : {
            transform: "rotate(0) translate(0)",
          },
          '20%, 60%': {
            transform: "rotate(-10deg) translateX(-5px)",
          },
          '40%, 80%': {
            transform: "rotate(10deg) translateX(5px)",
          },
        },
      },
      animation: {
        wave: "wave 0.70s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
