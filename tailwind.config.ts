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
        slidein: {
          '0%': {
            transform: "translateY(100px)"
          },
          '100%': {
            transform: "translateY(0px)"
          }
        },
        slideout: {
          '0%': {
            transform: "translateY(0px)"
          },
          '100%': {
            transform: "translateY(100px)"
          }
        },
      },
      animation: {
        wave: "wave 0.80s ease-out",
        slidein: "slidein .1s ease-in-out forwards",
        slideout: "slideout .1s ease-in-out forwards"
      },
    },
  },
  plugins: [],
};
export default config;
