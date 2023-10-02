import { colors } from '@click-tools-ui/tokens'
import defaultFontTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['"Roboto"', ...defaultFontTheme.fontFamily.sans],
      },
    },
  },
}
