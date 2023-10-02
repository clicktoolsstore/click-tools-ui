import { tv, VariantProps } from 'tailwind-variants'

export const headingTypo = tv({
  base: 'ct-font-sans ct-font-normal ct-text-primary-900',
  variants: {
    size: {
      sm: 'ct-text-2xl',
      md: 'ct-text-[1.75rem] ct-leading-9',
      lg: 'ct-text-[2rem] ct-leading-10',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type HeadingProps = VariantProps<typeof headingTypo>

export const labelTypo = tv({
  base: 'ct-font-sans ct-font-medium ct-text-primary-900',
  variants: {
    size: {
      sm: 'ct-text-[0.70rem] ct-leading-4 ct-tracking-[0.031rem]',
      md: 'ct-text-[0.75rem] ct-leading-4 ct-tracking-[0.031rem]',
      lg: 'ct-text-sm ct-tracking-[0.065rem]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type LabelProps = VariantProps<typeof labelTypo>

export const bodyTypo = tv({
  base: 'ct-font-sans ct-font-normal ct-text-primary-900',
  variants: {
    size: {
      sm: 'ct-text-[0.75rem] ct-leading-4 ct-tracking-[0.031rem]',
      md: 'ct-text-sm ct-tracking-[0.016rem]',
      lg: 'ct-text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type BodyProps = VariantProps<typeof bodyTypo>
