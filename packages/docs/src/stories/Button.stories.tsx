import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@click-tools-ui/react'

const meta: Meta<ButtonProps> = {
  title: 'Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    children: 'Button Label',
    disabled: false,
    isLoading: false,
  },
  argTypes: {
    children: {
      description: 'ReactNode',
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'mono', 'cta'],
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Mono: Story = {
  args: {
    variant: 'mono',
    children: 'Mono',
  },
}

export const CTA: Story = {
  args: {
    variant: 'cta',
    children: 'Call to action',
  },
}
