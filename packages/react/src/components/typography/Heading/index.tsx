import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { VariantProps, tv } from 'tailwind-variants'

type HeadingAsProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong'
} & React.HTMLAttributes<HTMLHeadingElement>

/** Default Heading tailwind-variant style */
export const headingStyle = tv({
  base: 'font-montserrat  text-neutral-900',
  variants: {
    size: {
      lg: 'text-lg leading-1.3',
      '2xl': 'text-2xl leading-1.3',
      '3.5xl': 'text-3.5xl leading-1.3',
      '5xl': 'text-5xl leading-1.3',
      '7xl': 'text-7xl leading-1.3',
    },
    weight: {
      bold: 'font-bold',
      black: 'font-black',
      'semi-bold': 'font-semibold',
    },
  },
  defaultVariants: {
    size: '2xl',
    weight: 'bold',
  },
})

type VariantsProps = VariantProps<typeof headingStyle>

type HeadingProps = HeadingAsProps & VariantsProps

/**
 * @param {HeadingProps['size']} [size] - md.
 * @param {HeadingAsProps} [as] - h2.
 */
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      as: Tag = 'h2',
      size = '2xl',
      weight = 'bold',
      children,
      className,
      ...rest
    } = props
    return (
      <Slot
        {...rest}
        ref={ref}
        className={headingStyle({ size, weight, className })}
      >
        <Tag>{children}</Tag>
      </Slot>
    )
  },
)
Heading.displayName = 'Heading'

export type { HeadingProps }
