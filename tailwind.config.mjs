/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Neutral canvas + indigo accent — clean engineering-tool palette.
        ink: {
          DEFAULT: '#0a0a0a',
          muted: '#404040',
          subtle: '#737373',
        },
        accent: {
          DEFAULT: '#4f46e5',     // indigo-600
          hover: '#4338ca',       // indigo-700
          subtle: '#eef2ff',      // indigo-50
        },
      },
      maxWidth: {
        content: '64rem',
      },
    },
  },
  plugins: [],
};
