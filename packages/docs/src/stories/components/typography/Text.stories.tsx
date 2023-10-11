import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@click-tools-ui/react'

const sizeOptions: TextProps['size'][] = ['xs', 'md', '2xl']

/** This component uses the `textStyle` preset. */
const meta: Meta<TextProps> = {
  title: 'Typography/Components/Text',
  tags: ['autodocs'],
  component: Text as any,
  args: {
    children: 'Some Text',
    size: 'md',
    as: 'span',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: sizeOptions,

      table: {
        defaultValue: {
          summary: 'md',
        },
      },
    },
    as: {
      control: 'inline-radio',
      options: ['span', 'label', 'p', 'div'] as TextProps['as'][],
      description: 'span/label: inline  - p/div: block',
      table: {
        defaultValue: {
          summary: 'span',
        },
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  render: (args: TextProps) => {
    return (
      <div className="bg-sb-bg-light p-3">
        <Text {...args} className="sb-unstyled" />
      </div>
    )
  },
}

export default meta

type Story = StoryObj<TextProps>

export const Default: Story = {}
