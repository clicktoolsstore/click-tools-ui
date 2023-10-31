import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps, cn } from '@click-tools-ui/react'
import TimesIcon from '~/assets/times.svg?react'

const variantOptions: ButtonProps['variant'][] = [
  'primary',
  'primary-inverse',
  'secondary',
  'secondary-inverse',
  'mono',
  'cta',
  'destructive',
]
const sizeOptions: ButtonProps['size'][] = ['32', 'sm', 'md', 'lg']
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
  render: ({ size, variant, children, ...rest }) => {
    return (
      <div
        className={cn(
          'flex flex-col p-4',
          // variant?.includes('inverse') && 'bg-sb-bg-dark',
          variant?.includes('mono') && 'bg-sb-bg-light',
        )}
      >
        <Button size={size} variant={variant} {...rest}>
          {size === '32' ? <TimesIcon color="inherit" /> : children}
        </Button>
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
