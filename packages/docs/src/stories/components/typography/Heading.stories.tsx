import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@click-tools-ui/react'

const sizeOptions: HeadingProps['size'][] = [
  'lg',
  '2xl',
  '2.5xl',
  '3.5xl',
  '5xl',
  '7xl',
]
const weightOptions: HeadingProps['weight'][] = ['semi-bold', 'bold', 'black']
const tagOptions: HeadingProps['as'][] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'strong',
]

/** This component uses the `headingStyle` preset. */
const meta: Meta<HeadingProps> = {
  title: 'Typography/Components/Heading',
  tags: ['autodocs'],
  component: Heading,
  args: {
    children: 'Some Heading',
    size: '2xl',
    weight: 'bold',
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
          summary: 'bold',
        },
      },
    },
    as: {
      control: 'inline-radio',
      options: tagOptions,
      table: {
        defaultValue: {
          summary: 'h2',
        },
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  render: (args) => {
    return (
      <div className="bg-sb-bg-light p-3 ">
        <Heading {...args} />
      </div>
    )
  },
}

export default meta

type Story = StoryObj<HeadingProps>

export const Default: Story = {}
