import { tv } from 'tailwind-variants'

export const button = tv({
  base: [
    'ct-font-sans ct-font-semibold',
    'ct-border ct-shadow-md ct-transition-colors',
    'ct-transition-shadow focus-visible:ct-outline-none focus-visible:ct-ring-1',
    'disabled:ct-opacity-75',
    'enabled:ct-cursor-pointer disabled:ct-cursor-not-allowed disabled:data-[loading=true]:ct-cursor-progress',
    'focus-visible:ct-border-primary-900 focus-visible:ct-ring-1 focus-visible:ct-ring-primary-900',
    'active:ct-ring-primary-900 enabled:active:ct-ring-2 ',
  ],
  variants: {
    variant: {
      primary: [
        'ct-border-primary-500 ct-bg-primary-500 ct-text-lightest hover:ct-bg-primary-500/90',
      ],
      secondary: [
        'ct-border-lightest ct-bg-lightest ct-text-primary-500 hover:ct-bg-dark-white/50',
      ],
      mono: 'ct-border-lightest ct-bg-lightest ct-text-stone-900 hover:ct-bg-dark-white/50',
      cta: [
        'ct-border-alert-500 ct-bg-alert-500 ct-text-lightest hover:ct-bg-alert-500/90',
      ],
      destructive: [
        'ct-border-error-500 ct-bg-error-500 ct-text-lightest hover:ct-bg-error-500/90',
      ],
    },
    size: {
      sm: 'ct-gap-2 ct-p-2',
      md: 'ct-gap-4 ct-px-5 ct-py-5',
      lg: 'ct-gap-4 ct-p-6',
    },
    rounded: {
      full: 'ct-rounded-full',
      '30': 'ct-rounded-[1.875rem]',
      '20': 'ct-rounded-[1.25rem]',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'lg',
    rounded: 'full',
  },
})
