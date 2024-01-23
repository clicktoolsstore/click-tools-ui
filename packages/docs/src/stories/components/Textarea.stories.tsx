import { Meta, StoryObj } from '@storybook/react'
import { TextareaProps, Textarea, cn } from '@click-tools-ui/react'

const options: TextareaProps['variant'][] = [
  'dark-outline',
  'primary-outline',
  'light-outline',
  'light-solid',
]
type Variants = Exclude<TextareaProps['variant'], undefined>
const bgContrast: Record<Variants, { className: string }> = {
  'dark-outline': { className: 'bg-dark-white' },
  'primary-outline': { className: 'bg-dark-white' },
  'light-outline': { className: 'bg-primary-500' },
  'light-solid': { className: 'bg-primary-600' },
}
const meta: Meta<TextareaProps> = {
  title: 'Components/Textareas/Textarea',
  component: Textarea,
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
        <Textarea {...args} />
      </div>
    )
  },
}

export default meta

type Story = StoryObj<TextareaProps>

export const DarkOutline: Story = {
  args: {
    variant: 'dark-outline',
  },
}

export const PrimaryOutline: Story = {
  args: {
    variant: 'primary-outline',
  },
}

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
