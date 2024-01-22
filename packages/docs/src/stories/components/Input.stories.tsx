import { Meta, StoryObj } from '@storybook/react'
import { InputProps, Input, cn } from '@click-tools-ui/react'

const options: InputProps['variant'][] = [
  'dark-outline',
  // 'dark-white-solid',
  // 'dark-solid',
  'primary-outline',
  // 'primary-solid',
  'light-outline',
  'light-solid',
]
type Variants = Exclude<InputProps['variant'], undefined>
const bgContrast: Record<Variants, { className: string }> = {
  'dark-outline': { className: 'bg-dark-white' },
  // 'dark-white-solid': { className: 'bg-off-white' },
  // 'dark-solid': { className: 'bg-dark-white' },
  'primary-outline': { className: 'bg-dark-white' },
  // 'primary-solid': { className: 'bg-dark-white' },
  'light-outline': { className: 'bg-primary-500' },
  'light-solid': { className: 'bg-primary-600' },
}
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
          summary: 'dark-outline',
        },
      },
    },
  },
  render: (args) => {
    return (
      <div
        className={cn(
          'p-5',
          bgContrast[args.variant || 'dark-outline'].className,
        )}
      >
        <Input {...args} />
      </div>
    )
  },
}

export default meta

type Story = StoryObj<InputProps>

export const DarkOutline: Story = {
  args: {
    variant: 'dark-outline',
  },
}

// export const DarkWhiteSolid: Story = {
//   args: {
//     variant: 'dark-white-solid',
//   },
// }

// export const DarkSolid: Story = {
//   args: {
//     variant: 'dark-solid',
//   },
// }

export const PrimaryOutline: Story = {
  args: {
    variant: 'primary-outline',
  },
}

// export const PrimarySolid: Story = {
//   args: {
//     variant: 'primary-solid',
//   },
// }

export const LightSolid: Story = {
  args: {
    variant: 'light-solid',
  },
}

export const LightOutline: Story = {
  args: {
    variant: 'light-outline',
  },
}
