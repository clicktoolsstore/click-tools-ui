import { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import { DocsContainer } from './DocContainer'

import '../src/index.css'
import '@click-tools-ui/react/dist/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      darkMode: {
        current: 'dark',
        dark: { ...themes.dark },
        light: { ...themes.light },
        darkClass: 'dark',
        stylePreview: true,
      },
    },
    docs: {
      theme: themes.dark,
      container: DocsContainer,
    },
  },
}

export default preview
