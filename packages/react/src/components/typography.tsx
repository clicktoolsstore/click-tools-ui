import { tv, VariantProps } from 'tailwind-variants'

export const headingTypo = tv({
  base: 'font-sans font-normal text-primary-900',
  variants: {
    size: {
      sm: 'text-2xl',
      md: 'text-[1.75rem] leading-9',
      lg: 'text-[2rem] leading-10',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type HeadingProps = VariantProps<typeof headingTypo>

export const labelTypo = tv({
  base: 'font-sans font-medium text-primary-900',
  variants: {
    size: {
      sm: 'text-[0.70rem] leading-4 tracking-[0.031rem]',
      md: 'text-[0.75rem] leading-4 tracking-[0.031rem]',
      lg: 'text-sm tracking-[0.065rem]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type LabelProps = VariantProps<typeof labelTypo>

export const bodyTypo = tv({
  base: 'font-sans font-normal  text-primary-900',
  variants: {
    size: {
      sm: 'text-[0.75rem] leading-4 tracking-[0.031rem]',
      md: 'text-sm tracking-[0.016rem]',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type BodyProps = VariantProps<typeof bodyTypo>
