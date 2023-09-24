import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@click-tools-ui/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    children: 'Button Label',
    disabled: false,
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
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<ButtonProps>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Mono: StoryObj<ButtonProps> = {
  args: {
    variant: 'mono',
    children: 'Mono',
    isLoading: true,
  },
}

export const CTA: StoryObj<ButtonProps> = {
  args: {
    variant: 'cta',
    children: 'Call to action',
    disabled: true,
  },
}
