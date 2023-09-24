import { Meta, StoryObj } from '@storybook/react'

import { Toast, ToastProps } from './Toast'
import { Button } from '@click-tools-ui/react'

export default {
  title: 'Feedbacks/Toasts',
  component: Toast,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
          <div className="gap-4 flex flex-col bg-neutral-300">
            <Button variant="primary" className="bg-primary-500">
              Primary
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="mono">Mono</Button>
            <Button variant="cta">Click to Action</Button>
          </div>
        </div>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj = {}
