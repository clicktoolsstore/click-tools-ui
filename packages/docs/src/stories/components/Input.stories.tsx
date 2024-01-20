import { Meta, StoryObj } from '@storybook/react'
import { InputProps, Input, cn } from '@click-tools-ui/react'

const options: InputProps['variant'][] = [
  'primary-outline',
  'primary-solid',
  'dark-outline',
  'dark-solid',
  'light-solid',
]

const lightLayout: InputProps['variant'][] = ['dark-solid', 'dark-outline']
const meta: Meta<InputProps> = {
  title: 'Components/Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    disabled: false,
    placeholder: 'Placeholder',
    readOnly: false,
    variant: 'dark-outline',
    defaultValue: '',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options,
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
          lightLayout.includes(args.variant) ? 'bg-slate-300' : 'bg-sb-bg-dark',
        )}
      >
        <Input {...args} />
      </div>
    )
  },
}

export default meta

type Story = StoryObj<InputProps>

export const LightSolid: Story = {
  args: {
    variant: 'light-solid',
  },
}

export const DarkSolid: Story = {
  args: {
    variant: 'dark-solid',
  },
}

export const DarkOutline: Story = {
  args: {
    variant: 'dark-outline',
  },
}

export const PrimarySolid: Story = {
  args: {
    variant: 'primary-solid',
  },
}

export const PrimaryOutline: Story = {
  args: {
    variant: 'primary-outline',
  },
}
