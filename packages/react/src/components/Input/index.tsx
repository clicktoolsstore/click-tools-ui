import { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const inputStyle = tv({
  base: [
    'ct-flex ct-w-full ct-rounded-md ct-border ct-px-3 ct-py-2',
    'ct-text-md ct-text-primary-900',
    'ct-bg-transparent ct-shadow-sm ct-transition-colors',
    'file:ct-border-0 file:ct-bg-transparent file:ct-text-sm file:ct-font-medium',
    'placeholder:ct-text-neutral-500',
    'focus:ct-transition-shadow focus-visible:ct-outline-none',
    'focus-visible:ct-ring-1',
    'disabled:ct-cursor-not-allowed',
    'read-only:ct-cursor-default',
  ],
  variants: {
    error: {
      true: 'ct-border-error-500 focus-visible:ct-ring-error-500',
      false: 'ct-border-primary-900 focus-visible:ct-ring-primary-900',
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
