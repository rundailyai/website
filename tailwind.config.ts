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
        // Primary Colors
        background: '#0A0E27',
        'background-alt': '#1A1A2E',
        'text-primary': '#F8F9FA',
        'text-secondary': '#A8ADB8',

        // Accent Colors
        'accent-blue': '#0061FF',
        'accent-blue-light': '#00D9FF',
        'accent-purple': '#8B5CF6',
        'accent-purple-light': '#A78BFA',
        'accent-cyan': '#06B6D4',

        // Card backgrounds
        'card-bg': 'rgba(26, 26, 46, 0.8)',
        'card-bg-light': 'rgba(26, 26, 46, 0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['42px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'xs': '8px',
        's': '16px',
        'm': '24px',
        'l': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0061FF 0%, #8B5CF6 100%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(0, 97, 255, 0.3)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.3)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.3)',
      },
      animation: {
        'float': 'floating 6s ease-in-out infinite',
        'float-delayed': 'floating 6s ease-in-out 2s infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
