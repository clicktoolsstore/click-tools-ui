import { Meta, StoryObj } from '@storybook/react'
import { InputProps, Input } from '@click-tools-ui/react'

const meta: Meta<InputProps> = {
  title: 'Components/Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    disabled: false,
    placeholder: 'Moto',
    readOnly: false,
    error: 'Some Error',
    value: 'Input Value',
  },
  argTypes: {},
}

export default meta

type Story = StoryObj<InputProps>

export const Default: Story = {}
