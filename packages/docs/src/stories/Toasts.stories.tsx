import { Meta, StoryObj } from '@storybook/react'

import { Toast, ToastProps } from './Toast'
import { Button, HStack } from '@click-tools-ui/react'

export default {
  title: 'Feedbacks/Toasts',
  component: Toast,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Story />
          <HStack>
            <Button variant={'primary'}>Text2</Button>
          </HStack>

          <HStack>
            <Button variant="secondary">Text</Button>
          </HStack>
        </div>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj = {}
