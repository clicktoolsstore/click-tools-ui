import { colors } from '@click-tools-ui/tokens'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/@click-tools-ui/react/dist/index.css',
  ],
  theme: {
    extend: {
      colors,
    },
  },

  plugins: [],
}

export default config
