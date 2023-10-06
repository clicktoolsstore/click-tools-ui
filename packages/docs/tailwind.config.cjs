import { colors } from '@click-tools-ui/tokens'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/@click-tools-ui/react/dist/index.css',
  ],
  theme: {
    extend: {
      colors: { ...colors, 'sb-bg-dark': '#333333', 'sb-bg-light': '#f8f8f8' },
    },
  },

  plugins: [],
}

export default config
