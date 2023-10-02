import { tv } from 'tailwind-variants'

export const button = tv({
  base: [
    'rounded-md px-3 py-2 font-semibold ',
    'border shadow-md',
    'focus:transition-shadow focus-visible:outline-none focus-visible:ring-1',
    'disabled:opacity-75',
    'enabled:cursor-pointer disabled:cursor-not-allowed disabled:data-[loading=true]:cursor-progress',
    'focus-visible:border-primary-900 focus-visible:ring-1 focus-visible:ring-primary-900',
  ],
  variants: {
    variant: {
      primary: ['border-primary-500 bg-primary-500 text-lightest'],
      secondary: 'bg-slate-300 text-primary-500',
      mono: 'bg-white text-stone-900',
      cta: 'bg-alert-500 text-lightest',
    },
  },
})
