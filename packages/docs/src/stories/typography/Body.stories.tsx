import { Meta, StoryObj } from '@storybook/react'
import { bodyTypo, BodyProps } from '@click-tools-ui/react'
import { HTMLAttributes } from 'react'

type ComponentProps = HTMLAttributes<HTMLHeadingElement> & BodyProps
/** Name - variant - fontSize/LineHeight letterSpacing fontWeight fontFamily */
const meta: Meta<ComponentProps> = {
  title: 'Typography/Body',
  tags: ['autodocs'],
  args: {
    size: 'md',
  },
  render: ({ size, className, children, ...rest }) => {
    return (
      <h1 className={bodyTypo({ size, className })} {...rest}>
        {children}
      </h1>
    )
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: {
          summary: 'md',
        },
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta

type Story = StoryObj<ComponentProps>

export const Small: Story = {
  args: {
    children: 'Heading - sm - 24/32 .0 400(normal) sans',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Heading - md - 28/36 .0  400(normal) sans',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Heading - lg - 32/40 .0  400(normal) sans',
  },
}
