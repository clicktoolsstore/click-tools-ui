import { ButtonHTMLAttributes, forwardRef } from 'react'
import { VariantProps } from 'tailwind-variants'

import { button } from './styles'

type ButtonVariants = VariantProps<typeof button>

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    isLoading?: boolean
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = 'primary',
      size = 'lg',
      rounded = 'full',
      className,
      isLoading,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        type={type}
        disabled={disabled || isLoading}
        {...props}
        data-loading={isLoading}
        className={button({ variant, size, rounded, className })}
        ref={ref}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
