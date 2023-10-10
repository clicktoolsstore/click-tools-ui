import { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

import { DocsContainer } from './DocContainer'

import '../src/styles/global.css'
import '@click-tools-ui/react/dist/index.css'

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
      default: 'dark',
      container: DocsContainer,
    },
    backgrounds: {
      default: 'dark',
    },
    options: {
      storySort: {
        order: ['*', 'Utils', 'Samples'],
      },
    },
  },
}

export default preview
