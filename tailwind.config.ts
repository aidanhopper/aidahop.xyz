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
      dropShadow: {
        'greet': '0px 0px 35px rgba(255, 0, 0, 1)'
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        slideintop: {
          from: {
            opacity: "0",
            transform: "translateY(50px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          },
        },
      },
      animation: {
        slidein: "slidein 300ms ease-in-out 150ms forwards",
        slideintop: "slideintop 200ms ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
