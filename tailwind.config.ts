import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    //new start:
    extend: {
      container: {
        padding: {
          DEFAULT: "16px", // px-6 (6×0.25rem = 1.5rem)
          sm: "48px", // sm:px-16 (16×0.25rem = 4rem)
        },
      },
      colors: {
        // Primary/Brand Colors
        primary: {
          50: "var(--primary-50, #dfd9ff)", // fallback value
          100: "var(--primary-100, #7f7ed2)" /*#bfa4f9 */,
          200: "var(--primary-200, #915eff)",
          300: "var(--primary-300, #402c77)",
          400: "var(--primary-400, #402c78)",
          500: "var(--primary-500, #1d1836)",
          600: "var(--primary-600, #151030)",
          700: "var(--primary-700, #100d25)",
          800: "var(--primary-800, #090325)",
          900: "var(--primary-900, #050816)",
        },
        // Neutral/Gray Scale
        neutral: {
          50: "var(--neutral-50, #FFFFFF)", // pure white
          100: "var(--neutral-100, #F1F1F1)", // off-white
          200: "var(--neutral-200, #f3f3f3)", // light gray
          300: "var(--neutral-300, #aaa6c3)", // gray-lavender
          400: "var(--neutral-400, #434343)", // medium gray
          500: "var(--neutral-500, #232631)", // dark gray
          600: "var(--neutral-600, #211e35)", // gray-purple
          700: "var(--neutral-700, #171717)", // near black
          800: "var(--neutral-800, #0a0a0a)", // almost black
          900: "var(--neutral-900, #000000)", // pure black
        },
        "main-bg": "var(--main-bg)",
        // Semantic Colors
        background: {
          DEFAULT: "var(--DEFAULT, #050816)", // main bg
          light: "var(--light, #151030)", // secondary bg
          card: "var(--card, #1d1836)", // card bg
          surface: "var(--surface, #211e35)", // surface bg
        },
        "card-bg": "var(--card-bg, red)",
        // Functional Colors
        border: {
          light: "var(--primary-300, #402c77)",
          DEFAULT: "var(--primary-200, #915eff)",
          dark: "var(--primary-500, #1d1836)",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px var(--neutral-600, #211e35)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern-dark": "url('/assets/images/herobg.png')",
        "hero-pattern-light": "url('/assets/images/herobg-light.png')",
      },
    },
    //new end.
  },
  darkMode: "class",
} as Config;
