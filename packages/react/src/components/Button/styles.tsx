import { tv } from 'tailwind-variants'

export const button = tv({
  base: [
    'flex items-center justify-center',
    'font-sans font-medium',
    'rounded-full',
    ' shadow-md transition-colors',
    'transition-shadow focus-visible:outline-none focus-visible:ring-1',
    'disabled:opacity-75',
    'enabled:cursor-pointer disabled:cursor-not-allowed disabled:data-[loading=true]:cursor-progress',
    'focus-visible:ring-1 focus-visible:ring-primary-900',
    'active:ring-primary-900 enabled:active:ring-2',
  ],
  variants: {
    variant: {
      primary: [' bg-primary-500 text-lightest hover:bg-primary-500/90'],
      secondary: [' bg-lightest text-primary-500 hover:bg-dark-white/50'],
      mono: ' bg-lightest text-stone-900 hover:bg-dark-white/50',
      cta: [' bg-alert-500 text-lightest hover:bg-alert-500/90'],
      destructive: [' bg-error-500 text-lightest hover:bg-error-500/90'],
    },
    size: {
      xs: ['gap-2 p-2', 'text-3.5xl leading-none'],
      sm: ['gap-2 px-4 py-2', 'text-xs leading-none'],
      md: ['h-10 gap-2 px-6 py-2', 'text-base leading-1.3'],
      lg: ['gap-4 px-8 py-4', 'text-base leading-none'],
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
