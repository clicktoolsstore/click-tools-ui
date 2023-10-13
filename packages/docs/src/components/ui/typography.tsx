import { tv } from 'tailwind-variants'

const labelSBStyle = tv({
  base: 'sb-unstyled font-roboto text-sm font-medium',
  variants: {
    variant: {
      light: 'text-gray-800',
      dark: 'text-gray-100',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
})

const smallSBStyle = tv({
  base: 'sb-unstyled  font-roboto text-xs font-medium',
  variants: {
    variant: {
      light: 'text-gray-600',
      dark: 'text-gray-300',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
})

export { labelSBStyle, smallSBStyle }
