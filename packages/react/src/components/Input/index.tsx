import { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const inputStyle = tv({
  base: [
    'flex w-full rounded-md border px-3 py-2',
    'text-md text-primary-900',
    'bg-transparent shadow-sm transition-colors',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-neutral-500',
    'focus:transition-shadow focus-visible:outline-none',
    'focus-visible:ring-1',
    'disabled:cursor-not-allowed',
    'read-only:cursor-default',
  ],
  variants: {
    error: {
      true: 'border-error-500 focus-visible:ring-error-500',
      false: 'border-primary-900 focus-visible:ring-primary-900',
    },
  },
  defaultVariants: {
    error: false,
  },
})

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  Omit<VariantProps<typeof inputStyle>, 'error'> & {
    error?: string
  }

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, readOnly, error, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={inputStyle({ error: !!error, className })}
        ref={ref}
        readOnly={readOnly}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'
