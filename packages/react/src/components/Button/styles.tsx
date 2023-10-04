import { tv } from 'tailwind-variants'

export const button = tv({
  base: [
    'font-sans font-semibold',
    'border shadow-md transition-colors',
    'transition-shadow focus-visible:outline-none focus-visible:ring-1',
    'disabled:opacity-75',
    'enabled:cursor-pointer disabled:cursor-not-allowed disabled:data-[loading=true]:cursor-progress',
    'focus-visible:border-primary-900 focus-visible:ring-1 focus-visible:ring-primary-900',
    'active:ring-primary-900 enabled:active:ring-2 ',
  ],
  variants: {
    variant: {
      primary: [
        'border-primary-500 bg-primary-500 text-lightest hover:bg-primary-500/90',
      ],
      secondary: [
        'border-lightest bg-lightest text-primary-500 hover:bg-dark-white/50',
      ],
      mono: 'border-lightest bg-lightest text-stone-900 hover:bg-dark-white/50',
      cta: [
        'border-alert-500 bg-alert-500 text-lightest hover:bg-alert-500/90',
      ],
      destructive: [
        'border-error-500 bg-error-500 text-lightest hover:bg-error-500/90',
      ],
    },
    size: {
      xs: ['gap-2 p-[0.438rem]', 'text-sm leading-none'],
      sm: ['gap-2 px-10 py-[0.438rem]', 'text-base leading-[1.188rem]'],
      md: ['gap-2 px-10 py-[0.938rem]', 'text-xl leading-[1.438rem]'],
      lg: ['gap-4 px-10 py-[1.438rem]', 'text-2xl leading-7'],
    },
    rounded: {
      full: 'rounded-full',
      '30': 'rounded-[1.875rem]',
      '20': 'rounded-[1.25rem]',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    rounded: 'full',
  },
})
