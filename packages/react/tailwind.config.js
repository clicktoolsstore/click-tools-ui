import { colors } from '@click-tools-ui/tokens'
import defaultFontTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['"Roboto"', ...defaultFontTheme.fontFamily.sans],
        montserrat: ['"Montserrat"', ...defaultFontTheme.fontFamily.sans],
      },
    },
  },
}

export default config
