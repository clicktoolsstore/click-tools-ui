import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, tv } from 'tailwind-variants'

type TextElement = HTMLSpanElement

type TextSpanProps = {
  as?: 'span'
} & ComponentPropsWithoutRef<'span'>
type TextDivProps = {
  as: 'div'
} & ComponentPropsWithoutRef<'div'>
type TextLabelProps = {
  as: 'label'
} & ComponentPropsWithoutRef<'label'>
type TextPProps = { as: 'p' } & ComponentPropsWithoutRef<'p'>

/** Default Heading tailwind-variant style */
export const textStyle = tv({
  base: 'font-roboto text-neutral-900',
  variants: {
    size: { xs: 'text-xs', md: 'text-base', '2xl': 'text-2xl' },
    leading: { '1.3': 'leading-1.3', '1.6': 'leading-1.6' },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'md',
    leading: '1.3',
    weight: 'regular',
  },
})

type VariantsProps = VariantProps<typeof textStyle>
type TextProps = VariantsProps &
  (TextSpanProps | TextDivProps | TextLabelProps | TextPProps)

export const Text = forwardRef<TextElement, TextProps>(
  (props, forwardedRef) => {
    const {
      children,
      className,
      size = 'md',
      leading = '1.3',
      weight = 'regular',
      as: Tag = 'span',
      ...rest
    } = props

    return (
      <Slot
        {...rest}
        ref={forwardedRef}
        className={textStyle({ size, leading, weight, className })}
      >
        {<Tag>{children}</Tag>}
      </Slot>
    )
  },
)
Text.displayName = 'Text'

export type { TextProps }
