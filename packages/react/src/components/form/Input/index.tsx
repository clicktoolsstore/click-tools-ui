import { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const inputStyle = tv({
  base: [
    'bg-transparent shadow-sm transition-colors',
    'flex w-full rounded-md border px-3 py-2',
    'text-md',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'focus:transition-shadow focus-visible:outline-none',
    'focus-visible:ring-1',
    'disabled:cursor-not-allowed',
    'read-only:cursor-default',
    'placeholder:text-sm',
  ],
  variants: {
    variant: {
      'light-solid': [
        'bg-white text-neutral-900',
        'border-neutral-300 focus-visible:ring-neutral-300',
        'placeholder:text-neutral-900/50',
      ],
      'dark-solid': [
        'bg-neutral-900 text-white',
        'border-neutral-900 focus-visible:ring-white',
        'placeholder:text-white/50',
      ],
      'dark-outline': [
        'text-neutral-900',
        'border-neutral-900 focus-visible:ring-neutral-900',
        'placeholder:text-neutral-900/50',
      ],
      'primary-solid': [
        'bg-primary-500 text-white',
        'border-primary-500 focus:border-white  focus-visible:ring-white',
        'placeholder:text-white/50',
      ],
      'primary-outline': [
        'text-primary-500',
        'border-primary-500  focus-visible:ring-primary-500',
        'placeholder:text-neutral-900/50',
      ],
    },
  },
  defaultVariants: {
    variant: 'dark-outline',
  },
})

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputStyle>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, readOnly, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={inputStyle({ variant, className })}
        ref={ref}
        readOnly={readOnly}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'
