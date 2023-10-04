import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@click-tools-ui/react'

const meta: Meta<ButtonProps> = {
  title: 'Components/Buttons/Button',
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    children: 'Button Label',
    disabled: false,
    isLoading: false,
    size: 'md',
  },
  argTypes: {
    children: {
      description: 'ReactNode',
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'mono', 'cta', 'destructive'],
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg'],
      table: {
        defaultValue: {
          summary: 'lg',
        },
      },
    },
  },

  render: (args) => {
    return (
      <div className="p-5 bg-slate-100">
        <Button {...args} />
      </div>
    )
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

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}
