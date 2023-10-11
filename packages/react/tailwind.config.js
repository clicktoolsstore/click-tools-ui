import {
  colors,
  borderRadius,
  fontSize,
  lineHeight,
  opacity,
} from '@click-tools-ui/tokens'
import defaultFontTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', ...defaultFontTheme.fontFamily.sans],
        roboto: ['"Roboto"', ...defaultFontTheme.fontFamily.sans],
        montserrat: ['"Montserrat"', ...defaultFontTheme.fontFamily.sans],
      },
      colors,
      fontSize,
      borderRadius,
      lineHeight,
      opacity,
    },
  },
}

export default config
