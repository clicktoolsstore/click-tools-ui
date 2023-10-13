import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@click-tools-ui/react'

const variantOptions: ButtonProps['variant'][] = [
  'primary',
  'primary-inverse',
  'secondary',
  'secondary-inverse',
  'cta',
  'destructive',
]
const sizeOptions: ButtonProps['size'][] = ['sm', 'md', 'lg']
const meta: Meta<ButtonProps> = {
  title: 'Components/Buttons/Button',
  tags: ['autodocs'],
  component: Button,
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
      options: variantOptions,
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      control: 'inline-radio',
      options: sizeOptions,
      table: {
        defaultValue: {
          summary: 'md',
        },
      },
    },
  },
  render: (args) => {
    return (
      <div className="bg-neutral-400 p-5">
        <Button {...args} />
      </div>
    )
  },
}

export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {}

export const PrimaryInverse: Story = {
  args: {
    variant: 'primary-inverse',
    children: 'Primary Inverse',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const SecondaryInverse: Story = {
  args: {
    variant: 'secondary-inverse',
    children: 'Secondary Inverse',
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
