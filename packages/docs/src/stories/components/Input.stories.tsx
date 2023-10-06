import { Meta, StoryObj } from '@storybook/react'
import { InputProps, Input, cn } from '@click-tools-ui/react'

const meta: Meta<InputProps> = {
  title: 'Components/Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    disabled: false,
    placeholder: 'Placeholder',
    readOnly: false,
    variant: 'dark',
    defaultValue: '',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Color schema',
      table: {
        defaultValue: {
          summary: 'dark',
        },
      },
    },
  },
  render: (args) => {
    return (
      <div
        className={cn(
          'p-5',
          args.variant === 'light' ? 'bg-sb-bg-dark' : 'bg-sb-bg-light',
        )}
      >
        <Input {...args} />
      </div>
    )
  },
}

export default meta

type Story = StoryObj<InputProps>

export const Dark: Story = {}

export const Light: Story = {
  args: {
    variant: 'light',
  },
}
