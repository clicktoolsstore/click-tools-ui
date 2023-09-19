import { colors, space } from '@click-tools-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

import type * as Stitches from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    minWidth: 'space',
    maxWidth: 'space',
    height: 'space',
    minHeight: 'space',
    maxHeight: 'space',
  },
  theme: { colors, space },
  utils: {
    mx: (value: Stitches.PropertyValue<'margin'>) => ({
      marginRight: value,
      marginLeft: value,
    }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    center: (value: boolean) =>
      value && {
        justifyContent: 'center',
        alignItems: 'center',
      },
  },
  prefix: 'ct-ui',
})

export type CSS = Stitches.CSS<typeof config>
