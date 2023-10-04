import { Meta, StoryObj } from '@storybook/react'
import { typography, type TypographyProps } from '@click-tools-ui/react'
import { HTMLAttributes } from 'react'
import { typographyInfo, Keys } from '~/common/typographyInfo'

type ComponentProps = HTMLAttributes<HTMLHeadingElement> & TypographyProps
/**  variant name - fontSize/LineHeight letterSpacing fontWeight fontFamily */
const meta: Meta<ComponentProps> = {
  title: 'Typography/typography',
  tags: ['autodocs'],
  args: {
    variant: 't1',
  },
  render: ({ variant, className, children, ...rest }) => {
    return (
      <div className="p-4 bg-slate-50">
        <h1 className={typography({ variant, className })} {...rest}>
          {children ||
            `${variant} - ${typographyInfo[variant as Keys].description}`}
        </h1>
      </div>
    )
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['h1', 'h2', 'h3', 'h4', 't1', 't2', 't3', 't4', 't5'],
      table: {
        defaultValue: {
          summary: 't4',
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<ComponentProps>

export const Default: Story = {
  args: {
    children: 'Some text',
  },
}
