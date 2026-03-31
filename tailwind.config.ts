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
        background: 'rgb(2, 8, 23)',
        'text-primary': 'rgb(248, 250, 252)',
        'text-muted': 'rgb(148, 163, 184)',
        'accent-blue': '#3B82F6',
        'accent-purple': '#8B5CF6',
        'card-bg': 'rgba(15, 23, 42, 0.8)',
      },
      animation: {
        'float': 'floating 6s ease-in-out infinite',
        'float-delayed': 'floating 6s ease-in-out 2s infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
