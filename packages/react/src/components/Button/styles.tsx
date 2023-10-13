import { tv } from 'tailwind-variants'
import { cn } from '~/utils/cn'

export const button = tv({
  base: cn([
    'flex items-center justify-center',
    'font-sans font-medium',
    'rounded-full',
    'border shadow',
    'transition-colors hover:transition-colors active:transition-colors',
    'enabled:cursor-pointer disabled:cursor-not-allowed disabled:data-[loading=true]:cursor-progress',
    'focus-visible:outline-none',
    'disabled:opacity-32',
    'enabled:active:ring-1',
  ]),
  variants: {
    variant: {
      primary: [
        'border-primary-500 bg-primary-500 text-white',
        'enabled:hover:border-primary-600 enabled:hover:bg-primary-600',
        'focus-visible:!border-neutral-900',
        'enabled:active:border-neutral-900 enabled:active:ring-neutral-900',
      ],
      'primary-inverse': [
        'border-white bg-white text-primary-500 ',
        'enabled:hover:border-neutral-500 enabled:hover:bg-neutral-500',
        'focus-visible:!border-primary-500',
        'enabled:active:border-primary-500 enabled:active:ring-primary-500',
      ],
      secondary: [
        'border-primary-500 bg-transparent text-primary-500 ',
        'enabled:hover:border-primary-600 enabled:hover:text-primary-600',
        'focus-visible:!border-neutral-900',
        'enabled:active:border-neutral-900 enabled:active:ring-neutral-900',
      ],
      'secondary-inverse': [
        'border-white bg-transparent text-white ',
        'enabled:hover:border-neutral-500 enabled:hover:text-neutral-500',
        'focus-visible:!border-primary-500',
        'enabled:active:border-primary-500 enabled:active:ring-primary-500',
      ],

      cta: [
        'border-alert-500 bg-alert-500 text-white ',
        'enabled:active:hover:bg-alert-500/90',
        'focus-visible:border-neutral-900',
        'enabled:active:border-neutral-900 enabled:active:ring-neutral-900',
      ],
      destructive: [
        'border-error-500 bg-error-500 text-white ',
        'enabled:active:hover:bg-error-500/90',
        'focus-visible:border-neutral-900',
        'enabled:active:border-neutral-900 enabled:active:ring-neutral-900',
      ],
    },
    size: {
      sm: ['gap-2 px-4 py-2', 'text-xs leading-none'],
      md: ['gap-2 px-6 py-3', 'text-base leading-none'],
      lg: ['gap-4 px-8 py-4', 'text-base leading-none'],
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
