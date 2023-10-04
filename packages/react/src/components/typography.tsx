import { tv, type VariantProps } from 'tailwind-variants'

export const typography = tv({
  base: 'font-montserrat text-primary-900',
  variants: {
    variant: {
      h1: 'text-9xl font-bold leading-[9.75rem] ',
      h2: 'text-8xl font-semibold leading-[7.375rem]',
      h3: 'text-7xl font-medium leading-[5.5rem]',
      h4: 'text-5xl font-medium leading-tight',
      t1: 'text-[2rem] font-medium leading-tight',
      t2: 'text-2xl font-medium leading-tight',
      t3: 'text-base font-semibold leading-tight',
      t4: 'text-base font-normal leading-tight',
      t5: 'text-xs font-medium leading-tight',
    },
  },
  defaultVariants: {
    variant: 't4',
  },
})

export type TypographyProps = VariantProps<typeof typography>
