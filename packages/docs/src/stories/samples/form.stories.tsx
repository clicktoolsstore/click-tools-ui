import { Button, Input } from '@click-tools-ui/react'
import { Meta, StoryObj } from '@storybook/react'

const Form = () => {
  return (
    <form className="flex max-w-sm p-4 rounded-md bg-dark-white flex-col gap-4">
      <h1 className="mx-auto font-bold text-primary-900 mb-2">Sample Form</h1>

      <Input value="Johndoe@gmail.com" placeholder="some@email.com" />

      <Input type="password" />

      <Button>Submit</Button>
    </form>
  )
}

const meta: Meta = {
  title: 'Samples/Form',
  component: Form,
}

export default meta

export const Default: StoryObj = {}
