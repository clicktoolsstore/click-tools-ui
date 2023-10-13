import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@click-tools-ui/react'

const sizeOptions: TextProps['size'][] = ['xs', 'md', '2xl']
const weightOptions: TextProps['weight'][] = ['regular', 'medium', 'bold']
const asOptions: TextProps['as'][] = ['span', 'label', 'p', 'div']
const leadingOptions: TextProps['leading'][] = ['1.3', '1.6']
/** This component uses the `textStyle` preset. */
const meta: Meta<TextProps> = {
  title: 'Typography/Components/Text',
  tags: ['autodocs'],
  component: Text as any,
  args: {
    children: 'Some Text',
    size: 'md',
    as: 'span',
    weight: 'regular',
    leading: '1.3',
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
    weight: {
      control: 'inline-radio',
      options: weightOptions,
      table: {
        defaultValue: {
          summary: 'regular',
        },
      },
    },
    leading: {
      control: 'inline-radio',
      options: leadingOptions,
      table: {
        defaultValue: {
          summary: '1.3',
        },
      },
    },
    as: {
      control: 'inline-radio',
      options: asOptions,
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
