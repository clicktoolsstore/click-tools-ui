import { ComponentProps, forwardRef } from 'react'

import { Styles } from './styles'

export type ButtonProps = ComponentProps<typeof Styles.Button> & {
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isLoading, disabled, type = 'button', children, ...props }, ref) => {
    return (
      <Styles.Button
        type={type}
        disabled={disabled || isLoading}
        data-isLoading={isLoading}
        {...props}
        ref={ref}
      >
        {children}
      </Styles.Button>
    )
  },
)

Button.displayName = 'Button'
