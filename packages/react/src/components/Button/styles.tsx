import { tv } from 'tailwind-variants'

export const button = tv({
  base: 'p-3 shadow-sm shadow-blue-400',
  variants: {
    variant: {
      primary: 'bg-primary-500 text-lightest',
      secondary: 'bg-slate-300 text-primary-500',
      mono: 'bg-white text-stone-900',
      cta: 'bg-alert-500 text-lightest',
    },
  },
})
