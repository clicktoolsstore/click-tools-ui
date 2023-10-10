import { colors, opacity, borderRadius } from '@click-tools-ui/tokens'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/@click-tools-ui/react/dist/index.css',
  ],
  theme: {
    extend: {
      colors: { ...colors, 'sb-bg-dark': '#333333', 'sb-bg-light': '#f8f8f8' },
      opacity,
      fontFamily: {
        sans: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        mono: ['monospace', defaultTheme.fontFamily.mono],
      },
      borderRadius,
    },
  },
  plugins: [],
  safelist: [{ pattern: /opacity-(8|16|32|64)/ }],
}

export default config
