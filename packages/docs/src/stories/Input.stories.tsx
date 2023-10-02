import { Meta, StoryObj } from '@storybook/react'
import { InputProps, Input } from '@click-tools-ui/react'

const meta: Meta<InputProps> = {
  title: 'Components/Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    disabled: false,
    placeholder: 'Placeholder',
    readOnly: false,
    error: undefined,
  },
  argTypes: {
    error: {
      type: 'string',
    },
    value: {
      type: 'string',
    },
  },
  render: (story) => {
    return (
      <div className="p-4 bg-gray-200">
        <Input error={'123123'} {...story} />
      </div>
    )
  },
}

export default meta

type Story = StoryObj<InputProps>

export const Default: Story = {}
