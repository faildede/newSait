import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";


const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: {
          1: "rgba(57, 57, 57, 1)"
        },
        red: {
          1: "rgba(227, 18, 53, 1)" ,
        },
        green: {
          1: "rgba(81, 158, 68, 1)",
        },
        grey: {
          1: "#4c4c4c",
          2: "#F5F5F6",
					3: "#828282",
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        slide: 'slide 5s linear forwards',
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slide: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
				spin: {
					"0%":  { transform:" rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				}
      },

    },
    fontFamily: {
      rubik: ['var(--font-rubik)'],
    },
  },
  plugins: [nextui()],
};
export default config;
