import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        helvetica: ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        primary:"#172C49",
        subPrimary:"#F1E9D2",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        slideLeft: 'slideLeft 6s infinite',
        slideRight: 'slideRight 6s infinite',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
    keyframes: {
      slowZoom: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.8)' },
      },
    },
    animation: {
      'slow-zoom': 'slowZoom 50s infinite',
    },
  },
  plugins: [],
} satisfies Config;
