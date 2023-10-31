import { tv } from 'tailwind-variants'

export const button = tv({
  base: [
    'flex items-center justify-center',
    'font-sans font-medium',
    'rounded-full',
    'border-2',
    'transition-colors hover:transition-colors active:transition-colors',
    'enabled:cursor-pointer disabled:cursor-not-allowed disabled:data-[loading=true]:cursor-progress',
    'focus-visible:outline-none',
    'disabled:opacity-32',
    'shadow-neutral-900 enabled:active:shadow-sm',
  ],
  variants: {
    variant: {
      primary: [
        'border-primary-500 bg-primary-500 text-white',
        'enabled:hover:border-primary-600 enabled:hover:bg-primary-600',
        'focus-visible:!border-neutral-900',
        'enabled:active:border-primary-700 enabled:active:bg-primary-700',
      ],
      'primary-inverse': [
        'border-white bg-white text-primary-500',
        'enabled:hover:border-neutral-900/5 enabled:hover:bg-neutral-900/5',
        'focus-visible:!border-primary-500',
        'enabled:active:bg-neutral-900/10 enabled:active:focus-visible:border-primary-500',
      ],
      secondary: [
        'border-primary-500 bg-transparent text-primary-500',
        'enabled:hover:border-primary-600 enabled:hover:text-primary-600',
        'focus-visible:!border-neutral-900',
        'enabled:active:border-primary-700 enabled:active:text-primary-700',
      ],
      'secondary-inverse': [
        'border-white bg-transparent text-white',
        'enabled:hover:border-neutral-500 enabled:hover:text-neutral-500',
        'focus-visible:!border-primary-500',
        'enabled:active:border-primary-500 enabled:active:text-primary-500',
      ],
      mono: [
        'border-transparent bg-transparent text-neutral-900',
        'enabled:hover:bg-neutral-900/5',
        'focus-visible:border-neutral-900',
        'enabled:active:bg-neutral-900/10',
      ],
      cta: [
        'border-alert-500 bg-alert-500 text-white',
        'enabled:active:hover:bg-alert-500/90',
        'focus-visible:border-neutral-900',
        'enabled:active:border-neutral-900 enabled:active:ring-neutral-900',
      ],
      destructive: [
        'border-error-500 bg-error-500 text-white',
        'enabled:active:hover:bg-error-500/90',
        'focus-visible:border-neutral-900',
        'enabled:active:border-neutral-900',
      ],
    },
    size: {
      '32': ['min-h-[2rem] w-fit min-w-[2rem] p-0.5', 'text-base'],
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
