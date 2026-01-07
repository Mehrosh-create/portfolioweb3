import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enables .dark and .light class-based themes
  theme: {
    extend: {
      // Add any custom colors, fonts, etc. here if needed
      colors: {
        accent: '#0FB8AF',
      },
    },
  },
  plugins: [
    // Remove tailwind-scrollbar entirely
    // Add other plugins if you use them (e.g., typography, forms)
  ],
};

export default config;